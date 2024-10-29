const questions = [
    "¿Cuál es el lenguaje de programación que se usa en la web?",
    "¿Qué significa HTML?",
    "¿Qué significa CSS?",
    "¿Cuál es el lenguaje que permite añadir interactividad en la web?",
    "¿Cuál es el framework de JavaScript desarrollado por Facebook?",
    "¿Qué es una variable en programación?",
    "¿Para qué sirve Git?",
    "¿Qué significa API?",
    "¿Qué es una función en programación?",
    "¿Qué es un array en programación?",
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
  
    document.getElementById("question-text").textContent = randomQuestion;
}
