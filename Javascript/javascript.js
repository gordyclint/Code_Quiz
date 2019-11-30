var scoreInput = document.querySelector("#score-number");
var initialForm = document.querySelector("#initial-form");
var initialList = document.querySelector("#inital-list");
var initialSpan = document.querySelectory("#initial-span");
var correctAnswer = document.querySelector("#answer");
var scoreSpan = document.querySelector("#score-button");

var score = [];
var initials = [];

savedInitials();

// Score Keeper
correctAnswer.addEventListener("submit", function(event) {
    event.preventDefault();

    var scoreText = scoreInput.value;

    if (scoreText === "answer") {
        scoreText++;
        scoreSpan.textContent = scoreText++
        alert ("Correct!");
    } else {
        alert ("Wrong!");
    }
    
    score.push(scoreText);
    scoreInput.value = "";

    storeScore();
    renderScore();
});

// Initial List Function
function renderInitials() {
    initialList.innerHTML = "";
    initialSpan.textContent = initials.length;

    for (var i = 0; i < initials.length; i++) {
        var initial = initials[i];

        var li = document.createElement("li");
        li.textContent = initial;
        li.setAttribute("data-index", i);

        initialList.appendChild(li);

    }

}

// Retrieving Stored Initials
function savedInitials() {
    var storedInitials = JSON.parse(localStorage.getItem("initials"));
    if (storedInitials !== null) {
        initials = storedInitials;
    }
    renderInitials();
}

function storeInitials() {
    localStorage.setItem("initials", JSON.stringify(initials));
}