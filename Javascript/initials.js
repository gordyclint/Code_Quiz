var nameInput = document.querySelector("#name-text");
var nameForm = document.querySelector("#name-form");
var nameList = document.querySelector("#name-list");
var submitButton = document.querySelector("#submit");

var names = [];

init();

function renderNames() {
    nameList.innerHTML = "";

    for (var i = 0; i < names.length; i++) {
        var name = names[i];

        var li = document.createElement("li");
        li.textContent = name;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Complete";

        li.appendChild(button);
        nameList.appendChild(li);
    }
}

function init() {

    var storedNames = JSON.parse(localStorage.getItem("names"));

    if (storedNames !== null) {
        names = storedNames;
    }

    renderNames();
}

function storeNames() {
    localStorage.setItem("names", JSON.stringify(names));
}


nameForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameText = nameInput.value.trim();

    if (nameText === "") {
        return;
    }

    names.push(nameText);
    nameInput.value = "";

    storeNames();
    renderNames();
});


function showFinalPage() {
    showPage(currentPage + 1);
}

