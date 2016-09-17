var button;
$(document).ready(function()
{
	button = document.getElementsByClassName("like-button-renderer-like-button-unclicked");
	button[0].addEventListener("click", function()
	{
		alert("Clicked Like!");
	})
});