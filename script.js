const startBtn = document.querySelector('#startBtn');
let startGame = document.querySelector('#startGame');
let wrapper = document.querySelector('.wrapper');
let nextBtn = document.querySelector('.next-btn');
let question = document.querySelector('#question');
let answerButton = document.getElementById('answerBtn');
let maxQuest = document.querySelector('#maxQuest');
let scoreCounter = document.querySelector('#score');
let questCount = document.querySelector('#questCount');
let choices = document.querySelectorAll('.btn');
let gameEnd = document.querySelector('.try-again');
let replayBtn = document.querySelector('#replay');
let finalResult = document.querySelector('.finalResult');

let index = 0;
scoreCounter.textContent = 0;
questCount.textContent = 1;
let score = 0;
isCorrect = false;
let rating;
let review;

//event listners for control buttons
startBtn.addEventListener('click', init);
nextBtn.addEventListener('click', nextQuestion);
replayBtn.addEventListener('click', restart);

//restarts the quiz
function restart() {
    location.reload();
}



//initialize  game
function init() {
    startGame.classList.add('hide');
    wrapper.classList.remove('hide');
    statsBar.classList.remove('hide');
    maxQuest.textContent = quiz.length;
    getQuiz();
}

//get quiz questions
function getQuiz() {
    question.textContent = quiz[index].question;

    //displays options for each question
    choices.forEach(function (choices, i) {
        choices.textContent = quiz[index].answers[i];
        selectAnswer();
    });
}

//selects option and prevent user from reselecting
function selectAnswer() {
    answerButton.addEventListener('click', (e) => {

        selectBtn = e.target;
        if ((selectBtn.innerText === quiz[index].correct) && (selectBtn.className === 'btn')){
            isCorrect = true;
            checkAnswer(selectBtn);
            score += 10;
            scoreCounter.textContent = score;
        }
        else {
            isCorrect = false;
            checkAnswer(selectBtn);
        }

        answerButton.style.pointerEvents = 'none'; //prevents me from clicking another answer
        nextBtn.classList.remove('hide'); // displays the control div for next 
    });
};

// checks if selected answer is correct
function checkAnswer(obj) {
    if (isCorrect) {
        obj.classList.add('correct');
    }
    else {
        obj.classList.add('wrong');
    }
}

//displays the next question
function nextQuestion() {
    if (index === 3) {
        nextBtn.textContent = 'View Score';
    }
    if (index === 4) {
        gameOver();
        console.log('over');
    }
    index++;
    getQuiz();
    questCount.textContent = index + 1;
    document.querySelector('#info').className = 'hide';
    reset();
};

//takes user to the end page
function gameOver() {
    wrapper.classList.add('hide');
    gameEnd.classList.remove('hide');
    nextBtn.classList.add('hide');
    statsBar.classList.add('hide');
    finalScore();
}


function reset() {
    startBtn.classList.remove('hide');
    answerButton.style.pointerEvents = 'auto';
    selectBtn.classList.remove('correct');
    selectBtn.classList.remove('wrong');
    nextBtn.classList.add('hide');
}
//displays final score to user
function finalScore() {
    switch (score) {
        case 50:
            review = document.querySelector('#review').textContent = 'Awesome!';
            rating = document.querySelector('.first').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points.`;
            break;

        case 40:
            review = document.querySelector('#review').textContent = 'Almost there!';
            rating = document.querySelector('.second').classList.remove('hide');
            finalResult.textContent = `You scored  ${score} points.`;
            break;

        case 30:
            review = document.querySelector('#review').textContent = ' A bit rusty!';
            rating = document.querySelector('.third').classList.remove('hide');
            finalResult.textContent = `You scored  ${score} points.`;
            break;

        case 20:
            review = document.querySelector('#review').textContent = 'Better luck';
            rating = document.querySelector('.fourth').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points.`;
            break;

        case 10:
            review = document.querySelector('#review').textContent = 'Really...';
            rating = document.querySelector('.last').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points.`;
            break;

        case 0:
            review = document.querySelector('#review').textContent = 'Really...';
            rating = document.querySelector('.last').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points.`;
            break;
    }
}

 //quiz questions
const quiz = [
    {
        question: ' The longest river in Africa is?',
        answers: ['Niger', 'Limpopo', 'Nile', 'Benue'],
        correct: 'Nile',
        value: 2
    },

    {
        question: "Which zodiac star sign is associated with the twins?",
        answers: ['Gemini', 'Scorpio', 'Aries', 'Cancer'],
        correct: 'Gemini',
        value: 0
    },

    {
        question: "How many countries make up the United Kingdom",
        answers: ['Three', 'Four', 'Nine', 'Twelve'],
        correct: 'Four',
        value: 1
    },

    {
        question: '"Big B and that B stands for..."?',
        answers: ['Beyoncé', 'Bugs', 'Bands', 'Batman'],
        correct: 'Bands',
        value: 2
    },

    {
        question: 'What is the only even positive prime number?',
        answers: ['4', '6', '100', '2'],
        correct: '2',
        value: 3
    }
];