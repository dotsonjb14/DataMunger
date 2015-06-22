var data = chrome.extension.getBackgroundPage().data;

function d(key) {
    if (typeof key === "string") {
        return data[key];
    }
}