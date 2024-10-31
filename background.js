chrome.action.onClicked.addListener(() => { // On click, send message to content script
    (async () => {
        const tab = await getCurrentTab()
        const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"})
        console.log(response)
        // chrome.windows.getCurrent((window) => {
        //     chrome.windows.update(window.id, {state: "fullscreen"})
        // })
        chrome.tabs.reload()    
    })();
})

async function getCurrentTab() { // Returns current tab
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }