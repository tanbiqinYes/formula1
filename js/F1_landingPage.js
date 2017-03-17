$(function(){
	$(".showMore").on("click", function(){
		$(this).prev("p").toggleClass("wordsShow");
		$(this).toggleClass("hide");
	});

	$(".playVideo").on("click", function(){
		$("#isshowcase").css("visibility", "visible").css("opacity", "1");
		$("#ismovie").html('<iframe width="100%" height="100%" src="http://player.youku.com/player.php/sid/XMjUxMjcxMzQzNg==/v.swf" frameborder="0" allowfullscreen=""></iframe>');
	});
	$("#isclose").on("click", function(){
		$("#isshowcase").css("visibility", "hidden").css("opacity", "0");
		$("#ismovie").html('');
	});

	$(".macthPicList li").hover(function(){
		$(this).children(".shadow").removeClass("hidden");
	    },function(){
	    $(this).children(".shadow").addClass("hidden");
	});
})