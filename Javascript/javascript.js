// Question Set
var myQuestions = [
    {
        question: "Welcome to the Coding Quiz!",
    },

    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "c"
    },
    {
        question: "Variables in JavaScript can be defined using:",
        answers: {
            a: "var",
            b: "int",
            c: "data",
            d: "val"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the command used to debug?",
        answers: {
            a: "index.html",
            b: "console.log",
            c: "github.io",
            d: "javascript.js"
        },
        correctAnswer: "b"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "js",
            b: "scripting",
            c: "script",
            d: "java"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is the correct place to insert a JavaScript link?",
        answers: {
            a: "body",
            b: "head and body",
            c: "head",
            d: "anywhere"
        },
        correctAnswer: "a"
    }
];

// Code for Each Question

function buildQuiz() {
    var output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </label>`
                );
            }
            output.push(
                `<div class="page">
                    <div class="question" > ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>
                </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');

}


// Show Results of Quiz
function showResults() {
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = 'input[name=question' + questionNumber + ']:checked';
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
        } else { }
    });

    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

// Transition of Pages
function showPage(n) {

    pages[currentPage].classList.remove('active-page');
    pages[n].classList.add('active-page');
    currentPage = n;

    if (currentPage === 0) {
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentPage === pages.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextPage() {
    showPage(currentPage + 1);
}

function showPreviousPage() {
    showPage(currentPage - 1);
}

var quizContainer = document.querySelector('#quiz');
var resultsContainer = document.querySelector('#results');
var submitButton = document.querySelector('#submit');

// Code to Display Quiz
buildQuiz();

// Pages variables
var previousButton = document.querySelector("#previous");
var nextButton = document.querySelector("#next");
var pages = document.querySelectorAll(".page");
var currentPage = 0;

showPage(0);

// Results on Submit
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousPage);
nextButton.addEventListener("click", showNextPage);



