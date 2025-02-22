chrome.action.onClicked.addListener(() =>
  chrome.runtime.getContexts({}, contexts =>
    chrome.action.setIcon({
      path: contexts.length < 2
        ? (
          chrome.offscreen.createDocument({
            justification: "",
            reasons: ["BLOBS"],
            url: "offscreen.htm"
          }),
          "on.png"
        )
        : (
          chrome.offscreen.closeDocument(),
          "off.png"
        )
    })
  )
);