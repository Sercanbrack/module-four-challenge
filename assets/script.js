var startButton = document.getElementById('start')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var timerElement = document.getElementById('timer')
var instructionsElement = document.getElementById('instructions')
let timer = 30
startButton.addEventListener('click', startQuiz)

const questions = [
    {
        "text": "Javascript is a ________ programming language.",
        "answers": {
            "correct": ["Loosely typed"],
            "incorrect": ["Strongly typed", "Static", "Server-side"]
        }
    },
    {
        "text": "What do the following symbols create?: '[ ]'",
        "answers": {
            "correct": ["An array"],
            "incorrect": ["A function", "A variable", "A string"]
        }
    },
    {
        "text": "What does the 'var' statement do?",
        "answers": {
            "correct": ["Creates a variable"],
            "incorrect": ["Creates an array", "Creates a function", "Concatenates two arrays"]
        }
    }
]

let answerCorrect = false
function answerLogic(buttonElement, question) {
    if (question.answers.correct.includes(buttonElement.innerText)) {
        correctAnswer()
    } else {
        incorrectAnswer()
    }
}

function showQuestion(question) {
    questionElement.innerText = question.text
    questionElement.style.color = "black"
    const buttonsDiv = document.getElementById("answer-buttons")
    buttonsDiv.innerHTML = "" 
    let mergedAnswers = question.answers.incorrect
    mergedAnswers = mergedAnswers.concat(question.answers.correct)
    console.log(JSON.stringify(question.answers, null, " "))
    mergedAnswers = shuffle(mergedAnswers)
    
    mergedAnswers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer
        button.addEventListener('click', () => {answerLogic(button, question)})
        buttonsDiv.appendChild(button)
    })
}

function startQuiz() {
    console.log('started!')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    timerElement.classList.remove('hide')
    timerElement.append(timer)
    instructionsElement.classList.add('hide')
    
    questions.forEach(question => {
        showQuestion(question)

        
    })
}

function correctAnswer() {
    questionElement.innerText = "Correct Answer!"
    questionElement.style.color = "var(--correct)"
    questionElement.innerText = "Correct Answer!"
    answerCorrect = true
}
function incorrectAnswer() {
    questionElement.innerText = "Incorrect Answer. -5 seconds."
    questionElement.style.color = "var(--incorrect)"
}

 function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    console.log(a)
    return a;
}