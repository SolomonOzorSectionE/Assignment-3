document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-form');
    const questionText = document.getElementById('question-text');
    const optionsList = document.getElementById('options');
    const feedback = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score');


    const questions = [
        {
            question: "What is not a type of fruit?",
            options: ["Apple", "Banana", "Peanut Butter", "Orange"],
            answer: "Peanut Butter"
        },
        {
            question: "What is the answer to true happiness?",
            options: ["Love", "Family", "A Gazillion Dollars", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "If I was born in 2003, how old will I be in 2024?",
            options: ["21", "22", "87", "5"],
            answer: "21"
        }
    ];

    let currentQuestion = 0;
    let score = 0;


    function displayQuestion() {
        const current = questions[currentQuestion];
        questionText.textContent = current.question;
        optionsList.innerHTML = '';
        current.options.forEach(option => {
            const li = document.createElement('li');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'answer';
            radio.value = option;
            li.appendChild(radio);
            li.appendChild(document.createTextNode(option));
            optionsList.appendChild(li);
        });
    }

    
    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (!selectedOption) {
            feedback.textContent = "Choose an answer before submitting.";
            return;
        }
        const answer = selectedOption.value;
        if (answer === questions[currentQuestion].answer) {
            feedback.textContent = "Correct";
            score++;
        } else {
            feedback.textContent = "Incorrect";
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            quizForm.style.display = 'none';
            scoreDisplay.textContent = `Your Score: ${score} out of ${questions.length}`;
        }
    }

    
    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();
        checkAnswer();
    });

    
    displayQuestion();
});
