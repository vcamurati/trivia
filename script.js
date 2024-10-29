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

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    document.getElementById("question-text").textContent = randomQuestion.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    randomQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.onclick = () => checkAnswer(option, randomQuestion.correct);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    const resultContainer = document.getElementById("result-container");
    if (selectedOption === correctAnswer) {
        resultContainer.textContent = "¡Correcto!";
        resultContainer.style.color = "green";
    } else {
        resultContainer.textContent = "Incorrecto. La respuesta correcta es: " + correctAnswer;
        resultContainer.style.color = "red";
    }
}
