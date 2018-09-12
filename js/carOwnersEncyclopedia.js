$(function() {	
	init();
    Handlebars.registerHelper("list",function(value, options){
    	var out="";
    	var maxnum = 8;
    	var length = value.length<=maxnum?value.length:maxnum;
    	for (var i=0;i<length;i++) {
    		
    		if (i==length-1 && value.length>maxnum){
    			out += '<li><a><img class="card-img" src="img/1.jpg"/>	'				
					+'<article class="card-content">'
					+'<div class="text-question"><mark class="q-icon">问</mark><span class="cart-text cart-question">'+value[i].query+'</span></div>'
					+'	<div class="text-response"><mark class="r-icon">答</mark><span class="cart-text cart-answer">'+value[i].answer[0].text+'</span></div>'
					+'</article>'
					+'<div class="c-pop"><div class="pop-img"><span>查看更多</span></div></div></a></li>';
    		}else{
    			out += options.fn(value[i]);
    		}
    	} 
    	return out;
    });
	$.getJSON("i18n/zh/carOwnersEncyclopedia.json", function(data) {
		var source = $("#entry-template").html();
		var template = Handlebars.compile(source);
		var context = template(data);		
		$("#carOwnwer").html(context);
		
		//定位
		var index = util.getUrlParam("index");
		if(!util.isEmpty(index)){
			util.toIndex(index,"data-page");
		}

		mitulineHide(26,'ellipsis');
		
		/*var lis = $(".centerList li"); 
		var src = ""; 
		var srcActive = "";
		for (var i=0;i<lis.length;i++) {
			src = lis[i].dataset.img; 
			lis[i].getElementsByTagName("span")[0].style.background="url(../YJZBWeb/img/"+src+") 50% bottom no-repeat";
			src = lis[i].onmouseover = function(){
				srcActive = this.dataset.imgactive;
				this.getElementsByTagName("span")[0].style.background="url(../YJZBWeb/img/"+srcActive+") 50% bottom no-repeat";
				this.getElementsByTagName("span")[1].style.color="#E5717A";
			}
			src = lis[i].onmouseout = function(){
				src = this.dataset.img;
				this.getElementsByTagName("span")[0].style.background="url(../YJZBWeb/img/"+src+") 50% bottom no-repeat";
				this.getElementsByTagName("span")[1].style.color="#CCCCCC";
			}
		}
		*/
	})	 

	//处理多行文字省略
	function mitulineHide(num, con) {
		var contain = $(".cart-answer");
		for(var i = 0; i < contain.length; i++) {
			var maxSize = num;
			var txt = contain[i].innerHTML;
			if(txt.length > num) {
				txt = txt.substring(0, num - 1) + "...";
				contain[i].innerHTML = txt;
			} else {
				//console.log("error") 
			}
		}

	};
	function init(){
		header();
		footer();
		var adtapter = adapter();
	}
});  