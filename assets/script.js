var startButton = document.getElementById('start')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var timerElement = document.getElementById('timer')
var buttonZeroElement = document.getElementById('button-0')
var buttonOneElement = document.getElementById('button-1')
var buttonTwoElement = document.getElementById('button-2')
var buttonThreeElement = document.getElementById('button-3')
var instructionsElement = document.getElementById('instructions')
let timer = 75
startButton.addEventListener('click', startQuiz)


function startQuiz() {
    console.log('started!')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    timerElement.classList.remove('hide')

    instructionsElement.classList.add('hide')
    timerElement.append(timer)
    question1()
}
function correctAnswer() {
    questionElement.innerText = "Correct Answer!"
    questionElement.style.color = "var(--correct)"
    setTimeout(() => {console.log("Correct answer!"); }, 2000)
}
function incorrectAnswer() {
    questionElement.innerText = "Incorrect Answer. -5 seconds."
    questionElement.style.color = "var(--incorrect)"
}
function question1() {
    let question = questions[0]
    let answer0 = answers0[0]
    let answer1 = answers0[1]
    let answer2 = answers0[2]
    let answer3 = answers0[3]
    questionElement.innerText = question
    buttonZeroElement.innerText = answer0
    buttonOneElement.innerText = answer1
    buttonTwoElement.innerText = answer2
    buttonThreeElement.innerText = answer3
    buttonZeroElement.addEventListener('click', incorrectAnswer())
    buttonOneElement.addEventListener('click', incorrectAnswer())
    buttonTwoElement.addEventListener('click', correctAnswer())
    buttonThreeElement.addEventListener('click', incorrectAnswer())
}

function question2() {

}

function question3() {

}

function question4() {

}

function question5() {

}

var questions = [
    "Javascript is a ______ programming language.",
    "What does the 'var' statement do in Javascript?",
    "What file extension do Javascript files save as?" ,
    "What do these symbols do in Javascript?: '[]'",
    "What is a true/false statement referred to as in Javascript?"
]

var answers0 = [
    "Strongly typed", "Static", "Loosely typed", "Server-side"
]

var answers1 = [
    "Creates an array", "Creates an object", "Creates a function", "Creates a variable"
]
var answers2 = [
    ".css", ".js", ".java", ".docx"
]
var answers3 = [
    "Create an array", "Create an object", "Create a function", "Create a break point"
]
var answers4 = [
    "Boolean", "If/Then", "If/Else", "DOM"
]
