chrome.commands.onCommand.addListener(function (command) {
    if (command !== "open-freedium-new-tab" && command !== "open-freedium") return;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs && tabs[0];
        if (!tab || !tab.url) return;

        const targetUrl = "https://freedium.cfd/" + encodeURIComponent(tab.url);


        if (command === "open-freedium") {
            chrome.tabs.update(tab.id, { url: targetUrl });

        }
        else {
            chrome.tabs.create({
                url: targetUrl,
                index: tab.index + 1
            });
        }
    });
});
