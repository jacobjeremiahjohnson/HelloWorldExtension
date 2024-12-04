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
)

chrome.storage.local.get(["toggle"]).then((result) => { // If toggle set to true, perform page action

  if (result.toggle) {
    editPage()
  }

})

// let extensionOn = true

// function click(e){
//   if (extensionOn){

//   } else {
//   }

//   extensionOn = !extensionOn
//   //         chrome.tabs.reload()    

// }

// chrome.browserAction.onClicked.addListener(click);

function editPage() { // Edit page 
  const header = document.querySelector("header");
  const main = document.getElementsByClassName("nH aqk aql bkL")[0]

  //let zoom = (( window.outerWidth - 10 ) / window.innerWidth) * 100;

  if (header && main) { // Check proper elements are present (gg if this doesn't work)
    
    const leftbar = main.children[0]
    const middle = main.children[1]

    leftbar.id = "leftbar"
    main.id = "main"
    middle.id = "middle"

    // Make main email section scrollable
    header.children[1].firstChild.firstChild.parentElement.removeChild(header.children[1].firstChild.firstChild)
    const selectBar = document.getElementById(":4")
    const scrollSection = document.getElementById(":3")

    scrollSection.insertBefore(selectBar, scrollSection.firstChild)
    scrollSection.insertBefore(header, scrollSection.firstChild)

    // const selectBarControls = document.getElementsByClassName("nH aqK")[0]
    // const accountButton = document.getElementsByClassName("gb_y gb_bd gb_Nf gb_Z")[0]

    // selectBarControls.insertBefore(accountButton, selectBarControls.firstChild)

    //Add search bar functionality
    const searchBar = document.getElementsByClassName("gb_we")[0]
    leftbar.insertBefore(searchBar, leftbar.children[2])
    
    const emails = document.querySelector("td")

    console.log(emails)
    for (let i = 0; i < emails.length; i++){
      console.log(emails[i])
      emails[i].children[4].style.padding = "0px 0px 0px 0px"
    }

    //header.parentElement.removeChild(header)
    const rightbar = main.children[2]
    rightbar.parentElement.removeChild(rightbar)
    // rightbar.id = "rightbar"
    // selectBar.parentElement.removeChild(selectBar)

    const searchSelector = document.querySelector("D E G-atb PY");
    if (searchSelector) {
      header.children[1].firstChild.firstChild.parentElement.removeChild(header.children[1].firstChild.firstChild)
      const scrollSection = document.getElementById(":3")

      scrollSection.insertBefore(searchSelector, scrollSection.firstChild)
      scrollSection.insertBefore(header, scrollSection.firstChild)
    }

  }
}
