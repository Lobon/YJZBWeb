$(function() {
	getFile("pengCi.json", function(list) {
		$("#list").append(list);
		var myadapter = adapter();
	}); 

});  