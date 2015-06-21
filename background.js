chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({'url': chrome.extension.getURL('main.html')}, function (tab) {

    });
});

var data = {};

chrome.runtime.onMessage.addListener(
    function (request) {
        data[request.key] = request.data;
    }
);