var s = document.createElement('script');
s.src = chrome.extension.getURL('page_script.js');
(document.head || document.documentElement).appendChild(s);
s.onload = function () {
    s.parentNode.removeChild(s);
};

document.addEventListener("datamunger-send", function (data) {
    console.log(data);

    chrome.runtime.sendMessage(data.detail);
});

console.log("Loaded");

/*
 chrome.runtime.sendMessage({
 key: key,
 data: data
 });*/
