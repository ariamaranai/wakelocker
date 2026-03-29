chrome.action.onClicked.addListener(() =>
  chrome.action.getTitle({}, title =>
    chrome.action.setTitle({
      title: title
        ? (
          chrome.action.setIcon({ path: "on.png" }),
          chrome.power.requestKeepAwake("display"),
          ""
        )
        : (
          chrome.action.setIcon({ path: "off.png" }),
          chrome.power.releaseKeepAwake(),
          "wakelocker"
        )
    })
  )
);