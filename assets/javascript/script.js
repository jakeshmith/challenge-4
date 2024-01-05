var quizData= [
    {
        question: 'In what year was the first iPhone released?',
        choices: ['2006', '2007', '2008', '2009'],
        answer: '2007',
    },
    {
        question: 'Which of these choices is not a Coco-Cola product?',
        choices: ['Mellow Yellow', 'Sprite', 'Starry', 'Fanta'],
        answer: 'Mellow Yellow',
    },
    {
        question: 'Which of the following NBA teams has never won an NBA Championship?',
        choices: ['Chicago Bulls', 'LA Lakers', 'Milwaukee Bucks', 'Indiana Pacers'],
        answer: 'Indiana Pacers',
    }
];

var quizContainer = document.querySelector('#card');
var submitButton = document.querySelector('#submit-score');
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var startEl = document.querySelector("#start");
var restartEl = document.querySelector("#reset");
var nameEl = document.querySelector("#name");
var timerEl = document.querySelector("#timer");
var feedbackEl = document.querySelector("#feedback");


var questionIndex = 0;
var time = quizData.length * 15;
var timerId;

function startQuiz() {
    timerId = setInterval(clockWork,1000);
    timerEl.textcontent = time;
    var StartScreenEl = document.getElementById("start-screen");
    StartScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestion();
}

function getQuestion() {
        var currentQuestion = quizData[questionIndex];
    var promptEl = document.getElementById("question-words")
        promptEl.textContent = currentQuestion.prompt;
        choicesEl.innerHTML = "";
        currentQuestion.choices.forEach(function(choices, i) {
            var choiceBtn = document.createElement("button");
            choiceBtn.setAttribute("value", choices);
            choiceBtn.textContent = i + 1 + ". " + choices;
            choiceBtn.onclick = questionClick;
            choicesEl.appendChild(choiceBtn);
        });
}


function questionClick(){
    if (this.value !== question[questionIndex].answer) {
        time -+ 12;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textcontent = "Sorry, the correct answer was ...";
    } else {
        feedbackEl.textContent = "Correct!";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 2000);
    questionIndex++;
    if (questionIndex === question.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function clockWork() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}

function quizEnd() {
    clearInterval(timerId);
    var endScreenEl = document.getElementById("end-quiz");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
    finalScoreEl.setAttribute("class", "hide");
}


function saveScore() {
    var name = nameEl.value.trim();
    if (name !== "") {
        var highscores1 = JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = {
            score: time,
            name: name
        };
        highscores1.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores1));
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        saveScore();
    }
}

startEl.onclick = startQuiz;
nameEl.onkeyup = checkEnter;
submitButton.onclick = saveScore;


