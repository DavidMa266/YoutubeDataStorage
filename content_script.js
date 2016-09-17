
function add_like_button()
{
	var button, title, description;
//Get Youtube's like button and attach an event listener so we can save the video's title/description
	button = document.getElementsByClassName("like-button-renderer-like-button-unclicked");
	button[0].addEventListener("click", function()
	{
		//console.log("Clicked Like!");
	//Extracting title and description from page
		title = document.getElementById("eow-title").innerHTML;
		description = document.getElementById("eow-description").innerHTML;
	//Saving Object
		var stored_object = {};
		stored_object[window.location.href] = {'t': title, 'd': description};
		//console.log(stored_object[window.location.href]);
		chrome.storage.sync.set(stored_object[window.location.href]/*, function()
		{
			//console.log("Callback");
			chrome.storage.sync.get(window.location.href, function(obj)
			{
				//console.log("Retrieving object");
				//console.log(obj[window.location.href]);
				var retrieved_title = obj[window.location.href].t;
				var retrieved_description = obj[window.location.href].d;
				//console.log(window.location.href + "\n" + retrieved_title + "\n" + retrieved_description);
			});
		}*/);
	});
}

document.addEventListener("spfdone", add_like_button);
document.addEventListener("DOMContentLoaded", add_like_button);