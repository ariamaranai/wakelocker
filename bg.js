chrome.action.onClicked.addListener(async () =>
  chrome.action.setIcon({
    path: (await chrome.runtime.getContexts({})).length < 2
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
);