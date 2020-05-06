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

//event listners for control buttons
startBtn.addEventListener('click', init);
nextBtn.addEventListener('click', nextQuestion);



//initialize  game
function init() {
    startGame.classList.add('hide');
    wrapper.classList.remove('hide');
    statsBar.classList.remove('hide');
    maxQuest.textContent = quiz.length;
    getQuiz();
}

//get quiz question
function getQuiz() {
    question.textContent = quiz[index].question;

    //displays options
    choices.forEach(function (choices, i) {
        choices.textContent = quiz[index].answers[i];
        selectAnswer();
    });
}

//selects and checks if answer choice is correct
function selectAnswer() {
    answerButton.addEventListener('click', (e) => {

        selectBtn = e.target;
        if (selectBtn.className === 'btn' && (selectBtn.innerText === quiz[index].correct)) {
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
    }
    );
}


function checkAnswer(obj) {
    if (isCorrect) {
        obj.classList.add('correct');
    }
    else {
        obj.classList.add('wrong');
    }

};

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
    reset();
};

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

function finalScore() {
    switch (score) {
        case 50:
            rating = document.querySelector('.first').classList.remove('hide');
            finalResult.textContent = `You scored a total of ${score} points. Awesome!`;
            break;

        case 40:
            rating = document.querySelector('.second').classList.remove('hide');
            finalResult.textContent = `You scored a total of ${score} points.  You're Almost there!`;
            break;

        case 30:
            rating = document.querySelector('.third').classList.remove('hide');
            finalResult.textContent = `You scored a total of  ${score} points. You're a bit rusty`;
            break;

        case 20:
            rating = document.querySelector('.fourth').classList.remove('hide');
            finalResult.textContent = `You scored a total of ${score} points. Better luck next time!.`;
            break;

        case 10:
            rating = document.querySelector('.last').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points. Too bad`;
            break;

        case 0:
            rating = document.querySelector('.last').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points. `;
            break;
    }
}


const quiz = [
    {
        question: 'Sleep is for the?',
        answers: ['Brave', 'Dead', 'Strong', 'Weak'],
        correct: 'Weak'
    },

    {
        question: "How many 0.5cm slices of bread can you cut from a whole bread that's 25cm long?",
        answers: ['25', '1', 'None', '39'],
        correct: '1'
    },

    {
        question: `There are two clocks of different colors: The red clock is broken and doesn't run at all, but the blue clock loses one second every 24 hours. Which clock is more accurate?`,
        answers: ['Neither', 'Red', 'Blue', 'Both'],
        correct: 'Red'
    },

    {
        question: '"Big B and that B stands for..."?',
        answers: ['Beyoncé', 'Bugs', 'Bands', 'Batman'],
        correct: 'Bands'
    },

    {
        question: 'Divide 30 by half and add ten.',
        answers: ['45.5', '70', '67', '30'],
        correct: '70'
    }
];