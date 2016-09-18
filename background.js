function request_oauth2()
{
	alert("request_oauth2");
	console.log("request_oauth2");
	chrome.identity.getAuthToken({"interactive": true}, function(token)
	{
		//xhttp.open("POST", "https://www.googleapis.com/upload/drive/v3/files");
		var fileMetadata = {
		  'name': 'config.json',
		  'parents': [ 'appDataFolder']
		};
		var media = {
		  mimeType: 'application/json',
		  body: fs.createReadStream('files/config.json')
		};
		drive.files.create({
		   resource: fileMetadata,
		   media: media,
		   fields: 'id'
		}, function(err, file) {
		  if(err) {
		    // Handle error
		    console.log(err);
		  } else {
		    console.log("Folder Id: ", file.id);
			drive.files.list({
			  spaces: 'appDataFolder',
			  fields: 'nextPageToken, files(id, name)',
			  pageSize: 100
			}, function(err, res) {
			  if(err) {
			    // Handle error
			    console.log(err);
			  } else {
			    res.files.forEach(function(file) {
			      console.log('Found file: ', file.name, file.id);
			    });
			  }
});		    
		  }
		});
	});
}

request_oauth2();
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	console.log("background.js" + tabs);
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});
