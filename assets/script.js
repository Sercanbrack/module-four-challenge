var startButton = document.getElementById('start')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var timerElement = document.getElementById('timer')
var instructionsElement = document.getElementById('instructions')
let timer = 75
startButton.addEventListener('click', startQuiz)

const questions = [
    {
        "text": "Javascript is a ________ programming language.",
        "answers": {
            "correct": ["Loosely typed"],
            "incorrect": ["Strongly typed", "Static", "Server-side"]
        }
    }
]

function answerLogic(buttonElement, question) {
    if (question.answers.correct.includes(buttonElement.innerText)) {
        // Perform correct actions
        correctAnswer()
    } else {
        // Vice-versa
        incorrectAnswer()
    }
}

function startQuiz() {
    console.log('started!')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    timerElement.classList.remove('hide')

    instructionsElement.classList.add('hide')
    timerElement.append(timer)

    questions.forEach(question => {
        questionElement.innerText = question.text

        const buttonsDiv = document.getElementById("answer-buttons")
        buttonsDiv.innerHTML = "" // Clear the div
        let mergedAnswers = question.answers.incorrect
        mergedAnswers = mergedAnswers.concat(question.answers.correct)
        console.log(JSON.stringify(question.answers, null, " "))
        mergedAnswers = shuffle(mergedAnswers)
        
        // Now we create the buttons
        mergedAnswers.forEach(answer => {
            const button = document.createElement("button")
            button.innerText = answer
            button.addEventListener('click', () => {answerLogic(button, question)})
            buttonsDiv.appendChild(button)
        })
    })
    // question1()
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


/**
 * Shuffles array in place using the Fisher-Yates shuffle algorithm.
 * @param {questions} a items An array containing the items.
 */
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