function header(){
	var data = '<div class="container">' +
				'<ul class="menu">' + 
					'<li tabindex="0" data-index="4">'+
						'<a href="aboutUs.html">关于我们</a>'+
					'</li>'+
					'<li tabindex="0" data-index="3"> '+
						'<a href="carOwnersEncyclopedia.html">车主百科</a>'+
					'</li>'+
					'<li tabindex="0" data-index="2">'+
						'<a href="ClaimCenter.html">理赔中心</a>'+
					'</li>'+
					'<li tabindex="0" data-index="1">'+
						'<a href="index.html">首页</a>'+
					'</li>'+
				'</ul>'+
				'<a href="index.html"><span class="fl-left icon-logo"></span></a>'+
			'</div>';
	$("#header").append(data);
	var index = $("#header").data("page");
	
	if (index != undefined){
		var list = $(".menu li")
		for (var i=0;i<list.length;i++) {
			if(list[i].dataset.index==index){
				//给a标签添加active
				$(list[i].children[0]).addClass("active");
			}
		}
		
	}
}
function footer(){
	var data = '<div class="detail">' +
				'<div class="bfooter-c">' +
					'<div class="model">' +
						'<div><a href="ClaimCenter.html">理赔中心</a></div>' +
						'<div><a href="ClaimCenter.html?index=process">理赔流程</a></div>' +
						'<div><a href="ClaimCenter.html?index=documentation">理赔材料</a></div>' +
						'<div><a href="ClaimCenter.html?index=issues">理赔问题</a></div>' +
					'</div>' +
					'<div class="model">' +
						'<div><a href="carOwnersEncyclopedia.html">车主百科</a></div>' +
						'<div><a href="carOwnersEncyclopedia.html?index=ensure">保障问题</a></div>' +
						'<div><a href="carOwnersEncyclopedia.html?index=pengci">碰瓷问题</a></div>' +
						'<div><a href="carOwnersEncyclopedia.html?index=common">常见问题</a></div>' +
					'</div>' +
					'<div class="model">' +
						'<div><a href="aboutUs.html">关于我们</a></div>' +
						'<div>' +
							'<a data-toggle="tooltip" data-placement="right" title="<span class=\'code-wb\'></span>">新浪微博</a>' +
						'</div>' +
						'<div>' +
							'<a data-toggle="tooltip" data-placement="right" title="<span class=\'code-wx\'></span>">官方微信</a>' +
						'</div>' +
						'<div>' +
							'<a data-toggle="tooltip" data-placement="right" title="<span class=\'code-tt\'></span>">官方头条</a>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="fl-right">' +
					'<div>联系方式</div>' +
					'<div>400-100-0306</div>' +
					'<div>(周一至周日9:00-18:30)</div>' +
				'</div>' +
			'</div>' +
			'<div class="f-bootom">' +
				'<img src="./img/bottom-line.png"/>' +
				'<p>版权归深圳众保汽车俱乐部和深圳成为智能交通系统有限公司所有  | <a href="ZBLawStatement.html">法律申明</a> | <a href="ZBTiaoKuan.html">隐私条款</a></p>' +
				'<p><a class="icp" href="http://www.miit.gov.cn"><span>粤ICP备11046807号-8</span></a></p>' +
			'</div>';
	$("#footer").append(data);
}