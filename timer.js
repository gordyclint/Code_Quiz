var timeDisplay = document.getElementById("time");
var startButton = document.getElementById("start");


function startTime() {

    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        timeDisplay.textContent = timeLeft + " seconds remaining";
        timeLeft--;

        if (timeLeft === 0) {
            timeDisplay.textContent = " ";
            clearInterval(timeInterval);
        }

    }, 1000);
    
}

startButton.addEventListener("click", startTime);
