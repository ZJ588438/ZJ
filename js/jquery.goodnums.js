/**
 * ��Ʒ�����Ӽ����
 * jquery.goodnums.js
 */
 jQuery(function(){
 
	/**
     * ɾ����Ʒ 
	 *
	 * ʹ��˵����
	 * Ԫ�ر���߱���������
	 * ���룺zid �ܼ�ID
	 * ���룺xclass ÿ����ƷС�Ƶ� class
	 * ���룺ValId input:text ��ǰ�ı���Ʒ������ID
	 *
	 * Demo��
	 * jQuery(".shop_good_delete").goodDelete({zid:'good_zongjia',xclass:'good_xiaojis'});
	 */
	jQuery.fn.goodDelete = function(options){
		var defaults = {
			Event : "click",
			zid : 'goods_zongjia',
			xclass : 'xclass'
		};
		
		var options = jQuery.extend(defaults,options);
		var obj = jQuery(this);
		obj.live(options.Event,function(e){
			if(confirm('ȷ��ɾ������Ʒ��')){
				jQuery(this).closest('tr').hide('1000').remove();
				goods_zongjia(options.zid,options.xclass);
			}
			
		});
	};
	
	/**
	 * ���ﳵ�����Ӽ�
	 *
	 * ʹ��˵����
	 * Ԫ�ر���߱���������
	 * ���룺zid �ܼ�ID
	 * ���룺xclass ÿ����ƷС�Ƶ� class
	 * ���룺ValId input:text ��ǰ�ı���Ʒ������ID
	 * ���룺ty ���е��������� ��ѡֵ�� '+'��'-'
	 * ��ѡ��max ���������Ʒ����	ע��Ҳ���ڵ���ʱ��������
	 * ��ѡ��min ����������Ʒ����	ע��Ҳ���ڵ���ʱ��������
	 *
	 * Demo��
	 * jQuery(".this_good_nums").goodnums({zid:'good_zongjia',xclass:'good_xiaojis',max:5,min:1,typ:'+'});
	 */
	jQuery.fn.goodnums = function(options){
		var defaults = {
			Event : "click",
			zid : 'goods_zongjia',
			xclass : 'xclass',
			type : '+',
			max : 9999,
			min : 1
		};
		
		var options = jQuery.extend(defaults,options);
		var obj = jQuery(this);
		obj.live(options.Event,function(e){
		
			var valId = jQuery(this).attr('valId');
			var did = jQuery(this).attr('did');
			var xid = jQuery(this).attr('xid');
			var type = jQuery(this).attr('ty') ? jQuery(this).attr('ty') : options.type;
			var max = jQuery(this).attr('max') ? jQuery(this).attr('max') : options.max;
			var min = jQuery(this).attr('min') ? jQuery(this).attr('min') : options.min;
			
			//var max = options.max;
			//var min = options.min;
			
			//�ж� Value �����Ƿ����
			if( !jQuery("#"+valId) ){
				alert('��������');
				return false;
			}
			
			if( !jQuery("#"+did) ){
				alert('��������');
				return false;
			}
			
			if( !jQuery("#"+xid) ){
				alert('��������');
				return false;
			}
			
			// ��ȡ��ǰ Value ����
			var num_obj = jQuery("#"+valId);
			var danjia_obj = jQuery("#"+did);
			var xiaoji_obj = jQuery("#"+xid);
			
			// ��ȡ ѡ��������������
			var nums = num_obj.val();
			var danjia = danjia_obj.text();
			
			// ����Ҫ����� ����ȫ��ת��Ϊ Int
			nums = parseInt(nums);
			max = parseInt(max);
			min = parseInt(min);
			danjia = parseFloat(danjia);
			
			if(type == '+'){
				if(nums < max){
					nums += 1;
					num_obj.val(nums);
					var xiaoji = danjia*nums;
					xiaoji_obj.text(xiaoji.toFixed(2));
					goods_zongjia(options.zid,options.xclass);
				}
			}
			else if( type == '-'){
				if(nums > min){
					nums -= 1;
					num_obj.val(nums);
					var xiaoji = danjia*nums;
					xiaoji_obj.text(xiaoji.toFixed(2));
					goods_zongjia(options.zid,options.xclass);
				}
			}
			
		   
			
		});
	}
	
   /**
	* Public Function
	*/
	 
   /**
	* ���㹺�ﳵ�ܼ�
	*
	* zid: �ܼ�ID 
	* xclass ������ƷС��class
	* 
	* Demo: goods_zongjia(options.zid,options.xclass);
	*/
	function goods_zongjia(zid,xclass){
		var zongjia = 0.00;
		jQuery('.'+xclass).each(function(){
			zongjia += parseFloat(jQuery(this).text());
		});
		jQuery('#'+zid).text(zongjia.toFixed(2));
	}
	 
 });