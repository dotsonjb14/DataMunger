document.GetDataForMunging = function (key, data) {
    var event = new CustomEvent("hello", {
        detail: {
            key: key,
            data: data
        }
    });
    document.dispatchEvent(event);
};