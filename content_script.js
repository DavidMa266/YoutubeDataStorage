function parse_url()
{
  var title = window.location.href;
  if(title.indexOf("/watch?v=") >=0)
  {
    console.log(title);
    title = title.replace(/.*:\/\/.*.youtube.com\/watch\?v=/, "");
    title = title.replace(/\&[\s\S]*/, "");
    return title;
  }

}


function parse_description()
{
  description = document.getElementById("eow-description").innerHTML;
  return description;
}



function add_like_button()
{
	var button, title, description;
//Get Youtube's like button and attach an event listener so we can save the video's title/description
	button = document.getElementsByClassName("like-button-renderer-like-button-unclicked");
	button[0].addEventListener("click", function()
	{
    var url = parse_url();

		title = document.getElementById("eow-title").innerHTML;
		description = parse_description();

		var stored_object = {};
		stored_object[url] = {'t': title, 'd': description};

		console.log(stored_object[url]);
		chrome.storage.sync.set(stored_object, function(){
      display_information();
    });
	});
}



function display_information(){
  if(document.getElementsByTagName("video").length == 0){
    var url = parse_url();
    chrome.storage.sync.get(url, function(obj)
    {
      var retrieved_title = obj[url].t;
      var retrieved_description = obj[url].d;
      var title_div = document.createElement("div");
      var descr_div = document.createElement("div");

      var title_content = document.createTextNode(retrieved_title);
      var descr_content = document.createTextNode(retrieved_description);

      title_div.appendChild(title_content);
      descr_div.appendChild(descr_content);
      document.body.appendChild(title_div);
      document.body.appendChild(descr_div);
    });
  }
}

document.addEventListener("spfdone", add_like_button);
document.addEventListener("DOMContentLoaded", add_like_button);

document.addEventListener("spfdone", display_information);
document.addEventListener("DOMContentLoaded", display_information);
