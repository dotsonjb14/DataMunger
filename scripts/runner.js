var supportedFunctions = [
    "map",
    "filter"
];

// test: ExecuteUSteps([1,2,3], [["map", "item * item"], ["filter", "item % 2 == 0"]])
function ExecuteUSteps(data, steps) {
    var c = steps.length;

    // make a blank promise
    var d = Q.defer();
    d.resolve(data);
    var prom = d.promise;

    for (var i = 0; i < c; i++) {
        var step = steps[i];
        prom = prom.then(function (data) {
            return ExecuteUStep(step[0], step[1], data)
        });
    }

    prom.then(function (data) {
        console.log(data)
    });

    return prom;
}

// test: ExecuteUStep("filter", "item % 2 == 0", [1,2,3]).inspect()
function ExecuteUStep(f, js, data) {
    var fjs = "_." + f + "(data, function (item) { return " + js + " })";
    return ExecuteStep(fjs, data);
}

// test: ExecuteStep("_.filter([1, 2, 3], function (item) { return item % 2 == 0 })", 3).inspect()
function ExecuteStep(js, data) {
    var d = Q.defer();

    d.resolve(eval(js));

    return d.promise;
}