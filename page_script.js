document.GetDataForMunging = function (key, data) {
    var event = new CustomEvent("datamunger-send", {
        detail: {
            key: key,
            data: data
        }
    });
    document.dispatchEvent(event);
};