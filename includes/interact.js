$(function() {

	var tocWrapper = $("#toc .wrapper");

	$("#mainContainer h1").each(function(i,item) {
	
		$("<a />")
			.text( $(item).text() )
			.attr("href","#")
			.data("scrollTo",item)
			.appendTo(tocWrapper)
	
	});

});

$("#toc a").live("click", function(e) {

	$.scrollTo( $(this).data("scrollTo"), {
		duration: 300,
		easing: "swing"
	});
	
	e.preventDefault();
	
});