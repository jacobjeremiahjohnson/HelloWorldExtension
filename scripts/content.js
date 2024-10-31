chrome.storage.local.get(["toggle"]).then((result) => { // If toggle set to true, perform page action
  console.log(result.toggle)

  if (result.toggle) {
    editPage()
  }

})

chrome.runtime.onMessage.addListener( // Whenever extension icon selected, switch toggle variable
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    chrome.storage.local.get(["toggle"]).then((result) => {
      chrome.storage.local.set({toggle: !result.toggle}, function() {
        console.log("set to " + !result.toggle)
      })
    });

    if (request.greeting === "hello") {
      sendResponse({farewell: "goodbye"})
    }

    return true;
  }
);

function editPage() { // Edit page 
  const header = document.querySelector("header");
  if (header) {
    header.parentElement.removeChild(header)
  }
}
