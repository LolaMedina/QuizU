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
replayBtn.addEventListener('click', restart);

function restart(){
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
        if(choices.textcontent == quiz[index].correct){
            console.log( `the answer is`+ quiz[index].correct)
        }
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
    document.querySelector('#info').className = 'hide';
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
        question: ' The longest river in Africa is?',
        answers: ['Niger', 'Limpopo', 'Nile', 'Benue'],
        correct: 'Nile'
    },

    {
        question: "Which zodiac star sign is associated with the twins?",
        answers: ['Gemini', 'Scorpio', 'Aries', 'Cancer'],
        correct: 'Gemini'
    },

    {
        question: "How many countries make up the United Kingdom",
        answers: ['Three', 'Four', 'Nine', 'Twelve'],
        correct: 'Four'
    },

    {
        question: '"Big B and that B stands for..."?',
        answers: ['Beyoncé', 'Bugs', 'Bands', 'Batman'],
        correct: 'Bands'
    },

    {
        question: 'What is the only even positive prime number?',
        answers: ['4', '6', '100', '2'],
        correct: '2'
    }
];