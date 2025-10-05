chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleBlocking") {
    if (message.enabled) {
      chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: ["ruleset_1"]
      });
      console.log("🟢 Bloqueur activé");
    } else {
      chrome.declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: ["ruleset_1"]
      });
      console.log("🔴 Bloqueur désactivé");
    }
  }
});

