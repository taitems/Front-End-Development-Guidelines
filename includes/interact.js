$(function() {

	var tocWrapper = $("#toc .wrapper");
	
	$("#mainContainer")
		.find("h1").each(function(i,item) {
			$(item).append("<a class='deepLink' href='#" + item.id + "'></a>");	
			$("<a />")
				.text( $(item).text() )
				.attr("href","#")
				.data("scrollTo",item)
				.appendTo(tocWrapper);
		}).end()
		.find("h2").each(function(i,item) {
			$(item).append("<a class='deepLink' href='#" + item.parentNode.id + "'></a>");	
		});
	
});

$("#toc a").live("click", function(e) {

	$.scrollTo( $(this).data("scrollTo"), {
		duration: 300,
		easing: "swing"
	});
	
	e.preventDefault();
	
});