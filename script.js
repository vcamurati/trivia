const questions = [
    {
        question: "¿Cuál es el lenguaje de programación que se usa en la web?",
        options: ["Python", "JavaScript", "Java"],
        correct: "JavaScript"
    },
    {
        question: "¿Qué significa HTML?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "HyperText Machine Language"],
        correct: "HyperText Markup Language"
    },
    {
        question: "¿Qué significa CSS?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "¿Cuál es el framework de JavaScript desarrollado por Facebook?",
        options: ["Angular", "React", "Vue"],
        correct: "React"
    },
    {
        question: "¿Para qué sirve Git?",
        options: ["Para desarrollar sitios web", "Para gestionar versiones de código", "Para diseñar interfaces"],
        correct: "Para gestionar versiones de código"
    },
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    selectedQuestions = getRandomQuestions(5);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("start-button").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion();
}

function getRandomQuestions(num) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function showQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("question-container").style.display = "none";
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
    resultContainer.textContent = `¡Juego terminado! Tu puntaje es ${score} de ${selectedQuestions.length}`;
}
