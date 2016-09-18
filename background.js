//oauth2 auth
chrome.identity.getAuthToken(
	{'interactive': true},
	function(){
	  //load Google's javascript client libraries
		window.gapi_onload = authorize;
		//loadScript('https://apis.google.com/js/client.js');
	}
);
/*
function loadScript(url){
  var request = new XMLHttpRequest();
  request.withCredentials = true;

	request.onreadystatechange = function(){
		if(request.readyState !== 4) {
			return;
		}

		if(request.status !== 200){
			return;
		}

    eval(request.responseText);
	};

	request.open('GET', url);
	request.send();
}*/

function authorize(){
  gapi.auth.authorize(
		{
			client_id: "678156302413-ktclnscuu17pedpa276hqbsobmd39ril.apps.googleusercontent.com",
			immediate: true,
			scope: "https://www.googleapis.com/auth/drive.appdata"
		},
		function(){
		  gapi.client.load('drive', 'v3', driveAPIloaded);
		  //gapi.client.load('gmail', 'v1', gmailAPILoaded);
		}
	);
}

function driveAPIloaded()
{
	alert("should be loaded?");
}


/*var access_token;
/*function init()
{
	alert("init");
	var xhttp = new XMLHttpRequest();
	//xhttp.open("POST", "https://www.googleapis.com/upload/drive/v3/files", true);
	xhttp.send();
	xhttp.onload = function()
	{
		alert(xhttp.response);
		if(this.status == 401)
		{
			alert("401 error");
			chrome.identity.removeCachedAuthToken({"token": access_token}, function()
				{
					alert("dealing with 401 error right now");
					authenticate_user();
				});
			alert("finished dealing with 401 error");
			return;
		}
		alert("success");
		alert(xhttp.response);
	};
}
init();*/
/*
Authenticates user and gets permission to access the Google Drive AppData API to store data
*/
/*
function authenticate_user()
{
	alert("Authenticating user..");
	chrome.identity.getAuthToken({"interactive": true}, function(token)
	{
		var xhttp = new XMLHttpRequest();
    	xhttp.open('GET', 'https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=' + token);		
		xhttp.send();
		xhttp.onload = function()
		{
			alert(xhttp.response);
			if(this.status == 401)
			{
				alert("401 error");
				chrome.identity.removeCachedAuthToken({"token": access_token}, function()
					{
						alert("dealing with 401 error right now");
						authenticate_user();
					});
				alert("finished dealing with 401 error");
				return;
			}
			alert("success");
			alert(xhttp.response);
		};

		access_token = token;
		if(chrome.runtime.lastError)
		{
			alert("chrome.runtime.error");
			alert(chrome.runtime.lastError.message);
			return;
		}
	});
}

authenticate_user();
/*

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
}*/

//authenticate_user();
//request_oauth2();
/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	console.log("background.js" + tabs);
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});
*/