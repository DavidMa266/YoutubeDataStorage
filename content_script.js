function get_video_id()
{
  var title = window.location.href;
  if(title.indexOf("/watch?v=") >=0)
  {
    title = title.replace(/.*:\/\/.*.youtube.com\/watch\?v=/, "");
    return title;
  }

}


function add_like_button()
{
	var button, title, description;
//Get Youtube's like button and attach an event listener so we can save the video's title/description
	button = document.getElementsByClassName("like-button-renderer-like-button-unclicked");
	button[0].addEventListener("click", function()
	{
		title = document.getElementById("eow-title").innerHTML;
		description = document.getElementById("eow-description").innerHTML;
    var url = get_video_id();
    console.log(url);
    console.log("We are liking this video")

		var stored_object = {};
		stored_object[url] = {'t': title, 'd': description};

		console.log(stored_object[url]);
		chrome.storage.sync.set(stored_object, function(){
      display_information();
    });
	});
}



function display_information(){
  //if(document.getElementsByTagName("video").length == 0){
    var url = get_video_id();
    chrome.storage.sync.get(url, function(obj)
    {
      console.log("We are retrieving relevant information")
      console.log(obj);
      var retrieved_title = obj[url].t;
      var retrieved_description = obj[url].d;
      console.log("Getting object");
      console.log(retrieved_title + "\n" + retrieved_description);
      var title_div = document.createElement("div");
      var descr_div = document.createElement("div");


      var title_content = document.createTextNode(retrieved_title);
      var descr_content = document.createTextNode(retrieved_description);

      title_div.appendChild(title_content);
      descr_div.appendChild(descr_content);
      document.body.appendChild(title_div);
      document.body.appendChild(descr_div);
    });
 // }
}

document.addEventListener("spfdone", add_like_button);
document.addEventListener("DOMContentLoaded", add_like_button);

document.addEventListener("spfdone", display_information);
document.addEventListener("DOMContentLoaded", display_information);
