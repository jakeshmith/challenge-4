const quizData= [
    {
        question: 'In what year was the first iPhone released?',
        options: ['2006', '2007', '2008', '2009'],
        answer: '2007',
    },
    {
        question: 'Which of these options is not a Coco-Cola product?',
        options: ['Mellow Yellow', 'Sprite', 'Starry', 'Fanta'],
        answer: 'Mellow Yellow',
    },
    {
        question: 'Which of the following NBA teams has never won an NBA Championship?',
        options: ['Chicago Bulls', 'LA Lakers', 'Milwaukee Bucks', 'Indiana Pacers'],
        answer: 'Indiana Pacers',
    }
]

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');


//TIMER

var timerEl = document.getElementById("timer");


var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";

        if(secondsLeft === 0) {
            alert = "Game Over!"
        }
    }, 1000);
}

//TIMER


function quiz() {
    let score = 0;

    quizData.forEach((question) => {
        let answer = prompt(question.question + "Answer: ");

        if (answer === question.answer) {
            score += 1;
            alert("Way to go!");
        } else {
            score -= 1;
            alert("Wrooooong!");
        }
    });
}