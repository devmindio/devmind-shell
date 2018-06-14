var allTools = ".fileTree, .search, .indent-code, .color-pick";
var allMenus = ".file, .edit";

$(document).ready(function(){
	$(".toolTrigger").click(function(){
		$(allTools).toggle();
		$(".toolFrame").removeClass("toolActive");
	});
	
	$(".tabsIndex").click(function(){
		$(".mobileTabs").toggle();
	});
	
	$(".editor, header").click(function(){
		$(".mobileTabs").hide();
	});

	$("header, .toolFrame").click(function(){
		$(allTools).hide();
	});

	$(".editor").click(function() {
		$(allMenus).hide();
	});

	$(".showFile").click(function(){
		$(allMenus).hide();
		$(".file").toggle();
	});

	$(".showEdit").click(function(){
		$(allMenus).hide();
		$(".edit").toggle();
	});

	$(".tab1, .tab2").click(function(){
		$(".tab").removeClass("active")
		$(this).addClass("active");
	});

	$('.color-pick').click(function () {
	    $(allTools).hide();
	    $(".toolFrame").addClass("toolActive");
	});
});