// function polling() {
//   console.log("polling");
//   setTimeout(polling, 1000 * 30);
// }

// polling();

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  sendResponse("good bye");
  if ("tabId" in request) {
    chrome.tabs.update(request.tabId, { active: true }, (tab) => {
      console.log(tab);
    });
  }
});
