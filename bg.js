{
let isLock = 0;
chrome.action.onClicked.addListener(() => {
  chrome.action.setIcon({
    path: (isLock = !isLock)
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
})
}