/*globals $, prettyPrint*/

$(function() {

	"use strict";

	prettyPrint();

	$(".topbar a").click(function(e) {
		// clunky overrides of hash link functionality to enable animated scrolling
		var href = $(this).attr("href");
		var targetObj = (href === "#") ? 0 : $($(this).attr("href"));
		$.scrollTo(targetObj,300);
		if (typeof history.replaceState === "function") {
			history.replaceState(null,null,href);
		}
		e.preventDefault();
	});

	$(".entry").each(function(i,item) {
		$('<a class="deepLink" href="#' + $(item).attr("id") + '"></a>').prependTo($(item).find("h3").eq(0));
	});

	$(".deepLink").live("click", function(e) {
		var href = $(this).attr("href");
		$.scrollTo($(this).parent().parent(),300);
		if (typeof history.replaceState === "function") {
			history.replaceState(null,null,href);
		}
		e.preventDefault();
	})
	 
});