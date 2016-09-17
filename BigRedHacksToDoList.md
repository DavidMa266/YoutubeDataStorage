#Youtube Data Storage
Our goal is to make it so that when you like a video, we will save the video's name, cover image, and description to a local database file associated with your Google account.

If the video gets deleted, we'll detect it and provide the information.

##Completed
1. Get like button working.
2. Save it to Google's chrome.storage.sync to save title, description, /*and cover image*/ of video to account.

#Current Goals
3. Use Youtube API to access account playlists and save their title, description, and cover image of the videos to account.
4. Detect if the current page is a "this video is removed page" and then replace it with title, description, cover image, and a notification that this video was removed.
5. Add a "Thanks!" button that links to like a PayPal or something
6. Add a startup page upon installing the extension that asks which lists you want to add data about to (e.g. "All lists", "Like", "Watch Later", ...)
7. Update the storage to be SQLite for memory efficiency
8. Clean up UI and make it look pretty
9. Publish it on the Chrome Extensions Store
10. Advertise it (e.g. HH and other Facebook groups)