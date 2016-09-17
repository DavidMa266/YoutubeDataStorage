
function add_like_button()
{
  var button;

    button = document.getElementsByClassName("like-button-renderer-like-button-unclicked");
    button[0].addEventListener("click", function()
    {
      alert("Clicked Like!");
      chrome.storage.sync.set({'url': window.location.href}, function() 
      {
        // Notify that we saved.
        alert('Settings saved');
        alert(window.location.href);
      });
  });
}


document.addEventListener("spfdone", add_like_button);
document.addEventListener("DOMContentLoaded", add_like_button);

