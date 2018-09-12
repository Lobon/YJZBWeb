$(function() {	
	init();

	getResult();

    function init(){
		header();
		footer();
		var adtapter = adapter();
	}
    function getResult(){
    	var page = util.getUrlParam("page");
    	var index = util.getUrlParam("index");
    	if(!util.isEmpty(page)){
    		$.getJSON("i18n/zh/carOwnersEncyclopedia.json", function(data) {
				var source = $("#entry-template").html();
				var template = Handlebars.compile(source);
				var result = "";
				for (var i=0;i<data.result.length;i++) {
					if(data.result[i].page==page){
						result=data.result[i];
					}
				}
				var context = template(result);		
				$("#carOwnwer").html(context);
				if(!util.isEmpty(index)){
					util.toIndex(index,"data-page");
				}
			});
    	}
    }
});  