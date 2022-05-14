var startButton = document.getElementById("start")
var questionContainer = document.getElementById("question")
var timerContainer = document.getElementById("timer")
var instructionsContainer = document.getElementById("instructions")
startButton.addEventListener("click", onStart)

function onStart() {
startButton.classList.add('hide')
instructionsContainer.classList.add('hide')
questionContainer.classList.remove('hide')
timerContainer.classList.remove('hide')
nextQuestion()
}

function nextQuestion() {

}

function selectAnswer() {

}

var questions = [
    {
        question: ""
    }
]
