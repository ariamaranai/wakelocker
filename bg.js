{
  let { action, power } = chrome;
  action.onClicked.addListener(() =>
    action.getTitle({}, title =>
      action.setTitle({
        title: title
          ? (
            action.setIcon({ path: "on.png" }),
            power.requestKeepAwake("display"),
            ""
          )
          : (
            action.setIcon({ path: "off.png" }),
            power.releaseKeepAwake(),
            "wakelocker"
          )
      })
    )
  );
}
