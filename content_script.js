function attachYoutubeLikeListener()
{
	$(".like-button-renderer-like-button-unclicked")[0].addEventListener("click", function()
	{
		alert("clicked liked!");
		//console.log("Clicked like!");
	});
	$("div").css("background-color", "#000");	
}

$(document).ready(function()
{
	attachYoutubeLikeListener();
	chrome.webNavigation.onHistoryStateUpdated.addListener(function()
	{
		console.log("Video updated!");
		attachYoutubeLikeListener();
	});
});

/*

$(document).ready(function()
{
	Because Youtube use AJAX for updating the video, our content-script won't be able to detect the new button
	$("#page").bind("DOMNodeInserted DOMNodeRemoved", function()
	{
		console.log("Changed video!");
		$("div").css("background-color", "#000");
		$(".like-button-renderer-like-button-unclicked").addEventListener("click", function()
		{
			alert("clicked liked!");
			//console.log("Clicked like!");
		});
	});
	/*console.log("Content Script Ready");
	var button = document.getElementsByClassName("like-button-renderer-like-button-unclicked");
	console.log("button[0] is " + button[0]);
	button[0].addEventListener("click", function()
	{
		alert("Clicked Like!");
	}, true*/