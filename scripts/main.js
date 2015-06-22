var data = chrome.extension.getBackgroundPage().data;
var steps = [];
var currentData = null;

data["Test DataSet"] = [{
    "id": 1,
    "gender": "Male",
    "first_name": "Jack",
    "last_name": "Gordon",
    "age": 60
}, {
    "id": 2,
    "gender": "Female",
    "first_name": "Ann",
    "last_name": "Lee",
    "age": 40
}, {
    "id": 3,
    "gender": "Female",
    "first_name": "Katherine",
    "last_name": "Garrett",
    "age": 21
}, {
    "id": 4,
    "gender": "Male",
    "first_name": "Earl",
    "last_name": "Burke",
    "age": 52
}, {
    "id": 5,
    "gender": "Female",
    "first_name": "Joyce",
    "last_name": "Watson",
    "age": 14
}, {
    "id": 6,
    "gender": "Male",
    "first_name": "Gregory",
    "last_name": "Mcdonald",
    "age": 53
}, {
    "id": 7,
    "gender": "Male",
    "first_name": "Ryan",
    "last_name": "Young",
    "age": 54
}, {
    "id": 8,
    "gender": "Male",
    "first_name": "Eugene",
    "last_name": "Gutierrez",
    "age": 58
}, {
    "id": 9,
    "gender": "Female",
    "first_name": "Martha",
    "last_name": "Ortiz",
    "age": 36
}, {
    "id": 10,
    "gender": "Female",
    "first_name": "Julia",
    "last_name": "Watkins",
    "age": 35
}, {
    "id": 11,
    "gender": "Male",
    "first_name": "Timothy",
    "last_name": "Mills",
    "age": 58
}, {
    "id": 12,
    "gender": "Female",
    "first_name": "Deborah",
    "last_name": "Ortiz",
    "age": 53
}, {
    "id": 13,
    "gender": "Male",
    "first_name": "Jerry",
    "last_name": "Wright",
    "age": 21
}, {
    "id": 14,
    "gender": "Male",
    "first_name": "Alan",
    "last_name": "Hart",
    "age": 17
}, {
    "id": 15,
    "gender": "Male",
    "first_name": "Ralph",
    "last_name": "Stanley",
    "age": 40
}, {
    "id": 16,
    "gender": "Male",
    "first_name": "Jerry",
    "last_name": "Alexander",
    "age": 25
}, {
    "id": 17,
    "gender": "Female",
    "first_name": "Pamela",
    "last_name": "Elliott",
    "age": 42
}, {
    "id": 18,
    "gender": "Female",
    "first_name": "Diana",
    "last_name": "Howell",
    "age": 58
}, {
    "id": 19,
    "gender": "Female",
    "first_name": "Kimberly",
    "last_name": "Hawkins",
    "age": 47
}, {
    "id": 20,
    "gender": "Female",
    "first_name": "Michelle",
    "last_name": "Davis",
    "age": 29
}, {
    "id": 21,
    "gender": "Female",
    "first_name": "Cynthia",
    "last_name": "Davis",
    "age": 37
}, {
    "id": 22,
    "gender": "Female",
    "first_name": "Phyllis",
    "last_name": "Bennett",
    "age": 18
}, {
    "id": 23,
    "gender": "Male",
    "first_name": "Jason",
    "last_name": "Boyd",
    "age": 50
}, {
    "id": 24,
    "gender": "Male",
    "first_name": "Bruce",
    "last_name": "Bradley",
    "age": 48
}, {
    "id": 25,
    "gender": "Female",
    "first_name": "Theresa",
    "last_name": "Lopez",
    "age": 44
}, {
    "id": 26,
    "gender": "Male",
    "first_name": "Justin",
    "last_name": "Berry",
    "age": 32
}, {
    "id": 27,
    "gender": "Male",
    "first_name": "Larry",
    "last_name": "Fox",
    "age": 28
}, {
    "id": 28,
    "gender": "Female",
    "first_name": "Alice",
    "last_name": "Miller",
    "age": 45
}, {
    "id": 29,
    "gender": "Female",
    "first_name": "Robin",
    "last_name": "Ross",
    "age": 31
}, {
    "id": 30,
    "gender": "Female",
    "first_name": "Sharon",
    "last_name": "Weaver",
    "age": 51
}, {
    "id": 31,
    "gender": "Male",
    "first_name": "Eric",
    "last_name": "Mccoy",
    "age": 46
}, {
    "id": 32,
    "gender": "Female",
    "first_name": "Jane",
    "last_name": "Perez",
    "age": 28
}, {
    "id": 33,
    "gender": "Male",
    "first_name": "Larry",
    "last_name": "Garcia",
    "age": 22
}, {
    "id": 34,
    "gender": "Male",
    "first_name": "Brian",
    "last_name": "Williamson",
    "age": 54
}, {
    "id": 35,
    "gender": "Female",
    "first_name": "Evelyn",
    "last_name": "Roberts",
    "age": 16
}, {
    "id": 36,
    "gender": "Female",
    "first_name": "Lori",
    "last_name": "Long",
    "age": 45
}, {
    "id": 37,
    "gender": "Female",
    "first_name": "Dorothy",
    "last_name": "Richards",
    "age": 16
}, {
    "id": 38,
    "gender": "Female",
    "first_name": "Ann",
    "last_name": "Hawkins",
    "age": 17
}, {
    "id": 39,
    "gender": "Male",
    "first_name": "Gary",
    "last_name": "Watkins",
    "age": 46
}, {
    "id": 40,
    "gender": "Female",
    "first_name": "Nancy",
    "last_name": "Williamson",
    "age": 22
}, {
    "id": 41,
    "gender": "Male",
    "first_name": "Billy",
    "last_name": "Gibson",
    "age": 36
}, {
    "id": 42,
    "gender": "Male",
    "first_name": "Brandon",
    "last_name": "Welch",
    "age": 40
}, {
    "id": 43,
    "gender": "Male",
    "first_name": "Martin",
    "last_name": "Bennett",
    "age": 14
}, {
    "id": 44,
    "gender": "Male",
    "first_name": "Joshua",
    "last_name": "Dean",
    "age": 18
}, {
    "id": 45,
    "gender": "Female",
    "first_name": "Annie",
    "last_name": "Perkins",
    "age": 30
}, {
    "id": 46,
    "gender": "Male",
    "first_name": "Larry",
    "last_name": "Olson",
    "age": 28
}, {
    "id": 47,
    "gender": "Male",
    "first_name": "Earl",
    "last_name": "Edwards",
    "age": 38
}, {
    "id": 48,
    "gender": "Female",
    "first_name": "Jessica",
    "last_name": "Smith",
    "age": 56
}, {
    "id": 49,
    "gender": "Male",
    "first_name": "Thomas",
    "last_name": "Kelley",
    "age": 51
}, {
    "id": 50,
    "gender": "Male",
    "first_name": "Stephen",
    "last_name": "Jordan",
    "age": 15
}, {
    "id": 51,
    "gender": "Female",
    "first_name": "Susan",
    "last_name": "Collins",
    "age": 14
}, {
    "id": 52,
    "gender": "Female",
    "first_name": "Maria",
    "last_name": "Anderson",
    "age": 11
}, {
    "id": 53,
    "gender": "Female",
    "first_name": "Lisa",
    "last_name": "Ortiz",
    "age": 60
}, {
    "id": 54,
    "gender": "Female",
    "first_name": "Dorothy",
    "last_name": "Torres",
    "age": 56
}, {
    "id": 55,
    "gender": "Male",
    "first_name": "Eric",
    "last_name": "Gutierrez",
    "age": 18
}, {
    "id": 56,
    "gender": "Male",
    "first_name": "Robert",
    "last_name": "Parker",
    "age": 15
}, {
    "id": 57,
    "gender": "Female",
    "first_name": "Wanda",
    "last_name": "Castillo",
    "age": 49
}, {
    "id": 58,
    "gender": "Female",
    "first_name": "Jessica",
    "last_name": "Freeman",
    "age": 13
}, {
    "id": 59,
    "gender": "Female",
    "first_name": "Beverly",
    "last_name": "Jenkins",
    "age": 54
}, {
    "id": 60,
    "gender": "Male",
    "first_name": "Juan",
    "last_name": "Watkins",
    "age": 22
}, {
    "id": 61,
    "gender": "Male",
    "first_name": "Todd",
    "last_name": "Oliver",
    "age": 48
}, {
    "id": 62,
    "gender": "Male",
    "first_name": "Harold",
    "last_name": "Butler",
    "age": 44
}, {
    "id": 63,
    "gender": "Male",
    "first_name": "Jimmy",
    "last_name": "Lopez",
    "age": 38
}, {
    "id": 64,
    "gender": "Male",
    "first_name": "Christopher",
    "last_name": "Howard",
    "age": 36
}, {
    "id": 65,
    "gender": "Male",
    "first_name": "Arthur",
    "last_name": "Henderson",
    "age": 28
}, {
    "id": 66,
    "gender": "Male",
    "first_name": "Juan",
    "last_name": "Spencer",
    "age": 22
}, {
    "id": 67,
    "gender": "Female",
    "first_name": "Linda",
    "last_name": "Hall",
    "age": 32
}, {
    "id": 68,
    "gender": "Female",
    "first_name": "Lori",
    "last_name": "Barnes",
    "age": 42
}, {
    "id": 69,
    "gender": "Male",
    "first_name": "Edward",
    "last_name": "Burns",
    "age": 59
}, {
    "id": 70,
    "gender": "Female",
    "first_name": "Jacqueline",
    "last_name": "Ellis",
    "age": 58
}, {
    "id": 71,
    "gender": "Female",
    "first_name": "Katherine",
    "last_name": "Cox",
    "age": 59
}, {
    "id": 72,
    "gender": "Male",
    "first_name": "William",
    "last_name": "Roberts",
    "age": 42
}, {
    "id": 73,
    "gender": "Female",
    "first_name": "Patricia",
    "last_name": "Simpson",
    "age": 32
}, {
    "id": 74,
    "gender": "Male",
    "first_name": "Dennis",
    "last_name": "Porter",
    "age": 29
}, {
    "id": 75,
    "gender": "Female",
    "first_name": "Janice",
    "last_name": "Peters",
    "age": 16
}, {
    "id": 76,
    "gender": "Male",
    "first_name": "Bruce",
    "last_name": "Gardner",
    "age": 26
}, {
    "id": 77,
    "gender": "Male",
    "first_name": "Johnny",
    "last_name": "Long",
    "age": 45
}, {
    "id": 78,
    "gender": "Female",
    "first_name": "Carolyn",
    "last_name": "Warren",
    "age": 19
}, {
    "id": 79,
    "gender": "Female",
    "first_name": "Amanda",
    "last_name": "Ford",
    "age": 39
}, {
    "id": 80,
    "gender": "Female",
    "first_name": "Julia",
    "last_name": "Moore",
    "age": 28
}, {
    "id": 81,
    "gender": "Male",
    "first_name": "Philip",
    "last_name": "Shaw",
    "age": 56
}, {
    "id": 82,
    "gender": "Male",
    "first_name": "Willie",
    "last_name": "Hayes",
    "age": 22
}, {
    "id": 83,
    "gender": "Male",
    "first_name": "Arthur",
    "last_name": "Lane",
    "age": 27
}, {
    "id": 84,
    "gender": "Female",
    "first_name": "Tina",
    "last_name": "Reed",
    "age": 51
}, {
    "id": 85,
    "gender": "Male",
    "first_name": "Gary",
    "last_name": "Wilson",
    "age": 53
}, {
    "id": 86,
    "gender": "Female",
    "first_name": "Michelle",
    "last_name": "Martin",
    "age": 29
}, {
    "id": 87,
    "gender": "Female",
    "first_name": "Alice",
    "last_name": "Ward",
    "age": 59
}, {
    "id": 88,
    "gender": "Female",
    "first_name": "Denise",
    "last_name": "Pierce",
    "age": 22
}, {
    "id": 89,
    "gender": "Female",
    "first_name": "Elizabeth",
    "last_name": "Warren",
    "age": 52
}, {
    "id": 90,
    "gender": "Male",
    "first_name": "Jesse",
    "last_name": "Nelson",
    "age": 22
}, {
    "id": 91,
    "gender": "Male",
    "first_name": "Harold",
    "last_name": "Cunningham",
    "age": 39
}, {
    "id": 92,
    "gender": "Female",
    "first_name": "Virginia",
    "last_name": "Palmer",
    "age": 60
}, {
    "id": 93,
    "gender": "Female",
    "first_name": "Anne",
    "last_name": "Cunningham",
    "age": 10
}, {
    "id": 94,
    "gender": "Male",
    "first_name": "Larry",
    "last_name": "Wright",
    "age": 50
}, {
    "id": 95,
    "gender": "Male",
    "first_name": "Kevin",
    "last_name": "Sims",
    "age": 46
}, {
    "id": 96,
    "gender": "Female",
    "first_name": "Jennifer",
    "last_name": "Walker",
    "age": 35
}, {
    "id": 97,
    "gender": "Male",
    "first_name": "Billy",
    "last_name": "Turner",
    "age": 19
}, {
    "id": 98,
    "gender": "Female",
    "first_name": "Lois",
    "last_name": "Garcia",
    "age": 19
}, {
    "id": 99,
    "gender": "Female",
    "first_name": "Karen",
    "last_name": "Gonzales",
    "age": 32
}, {
    "id": 100,
    "gender": "Male",
    "first_name": "Raymond",
    "last_name": "Garcia",
    "age": 46
}];

function d(key) {
    if (typeof key === "string") {
        return data[key];
    }
}

function getKeys() {
    var keys = [];
    for (var key in data) {
        keys.push(key)
    }

    return keys;
}

$(function () {
    var keys = getKeys();
    for (var i = 0; i < keys.length; i++) {
        var link = $("<a />").attr("href", "#" + keys[i]).text(keys[i]);
        var li = $("<li />").attr("id", "link-" + keys[i].replace(/ /g, "_")).append(link);
        $("#nav-sidebar").append(li)
    }

    if (window.location.hash != "") {
        var hash = window.location.hash;
        $("#nav-sidebar li").attr("class", "");
        $("#link-" + hash.replace(/ /g, "_").replace("#", "")).attr("class", "active");

        document.dispatchEvent(new CustomEvent("set-data"));
    }
});

window.addEventListener('popstate', function (event) {
    var hash = event.target.location.hash;
    $("#nav-sidebar li").attr("class", "");
    $("#link-" + hash.replace(/ /g, "_").replace("#", "")).attr("class", "active");
});

function AddNewStep() {
    var i = steps.length;
    steps.push({
        f: "-1",
        js: ""
    });

    $("#data-container").append(CreateStep(i, steps[i]));
}

function ExecuteStep(step) {

}

function RemoveStep(step) {

}

function UpdateStep(step) {
    step[this.getAttribute("data-field")] = this.value;
}

function CreateStep(i, step) {
    var fset = $("<fieldset />");
    fset.append($("<legend />").text("Step " + (i + 1)));

    var funcList = $("<select />").attr({
        class: "form-control",
        "data-field": "f"
    });
    funcList.change(_.partial(UpdateStep, step));
    funcList.append($("<option />").text("... Select").val("-1"));
    funcList.append($("<option />").text("Filter").val("filter"));
    funcList.append($("<option />").text("Map").val("map"));
    funcList.append($("<option />").text("Raw").val("raw"));

    funcList.val(step.f);

    fset.append(funcList);

    fset.append($("<input />").attr({
        type: "text",
        class: "form-control",
        placeholder: "Expression",
        value: step.js,
        "data-field": "js"
    }).change(_.partial(UpdateStep, step)));

    fset.append("<br/>");

    fset.append($("<input />").attr({
        type: "button",
        class: "btn btn-primary",
        value: "Add Step"
    }).click(AddNewStep));

    fset.append($("<input />").attr({
        type: "button",
        class: "btn btn-default",
        value: "Execute"
    }).click(_.partial(ExecuteStep, step)));

    fset.append($("<input />").attr({
        type: "button",
        class: "btn btn-danger",
        value: "Remove"
    }).click(_.partial(RemoveStep, step)));
    return fset;
}

function InitializeScreen() {
    if (!steps.length) {
        return;
    }

    var container = $("#data-container");
    container.html("");

    for (var i = 0; i < steps.length; i++) {
        var step = steps[i];

        container.append(CreateStep(i, step));
    }
}

document.addEventListener("set-data", function (event) {
    var hash = window.location.hash;
    if (hash == "") {
        return; // load no data;
    }

    currentData = d(hash.replace("#", ""));
    steps = [{
        f: "-1",
        js: ""
    }];

    InitializeScreen();
});