
function add_like_button()
{
	var button, title, description;

    button = document.getElementsByClassName("like-button-renderer-like-button-unclicked");
    button[0].addEventListener("click", function()
    {
      alert("Clicked Like!");
      title = document.getElementById("eow-title").innerHTML;
      description = document.getElementById("eow-description").innerHTML;
      var stored_object = {};
      stored_object[window.location.href] = {'t': title, 'd': description};
      console.log(stored_object);
      chrome.storage.sync.set(stored_object);
      chrome.storage.sync.get(window.location.href, function(obj)
      {
      	console.log(obj);
      	var retrieved_title = obj['t'];
      	var retrieved_description = obj['d'];
      	console.log(window.location.href + "\n" + retrieved_title + "\n" + retrieved_description);
      });
  });
}


document.addEventListener("spfdone", add_like_button);
document.addEventListener("DOMContentLoaded", add_like_button);

