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
const submitButton = document.getElementById('submit-score');
var questionsEl = document.getElementById("#questions");
var choicesEl = document.getElementById("#choices");
var startEl = document.getElementById("#start");
var restartEl = document.getElementById("#reset");
var nameEl = document.getElementById("#name");
var timerEl = document.getElementsByClassName("timer");


var questionIndex = 0;
var secondsLeft = 60;
var time = questions.length * 15;

// This gets the whole things rolling.
function startQuiz() {
    var StartScreenEl = document.getElementById("card");
    StartScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestion();
}

//This displays the questions and options.
function getQuestion() {
    var currentQuestion = quizData[questionIndex];
    var promptEl = document.getElementById("question-words")
        promptEl.textContent = currentQuestion.prompt;
        choicesEl.innerHTML = "";
        currentQuestion.option.forEach(function(choice, i) {
            var choiceBtn = document.createElement("button");
            choiceBtn.setAttribute("value", choice);
            choiceBtn.textContent = i + 1 +". " + choice;
            choiceBtn.onclick = questionClick;
            choicesEl.appendChild(choiceBtn);
        });
}


//This will check for right answers. ADDD
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
    }
}

//This is for showing the final score.
function quizEnd() {
    clearInterval(timerId);
    var endScreenEl = document.getElementById("end-quiz");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.setAttribute("class", "hide");
}


function clockWork() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}



function saveScore() {
    var name = nameEl.value.trim();
    if (name !== "") {
        var highscores = JSON.parse(window.localStorage.getItem("highschores")) || [];
        var newScore = {
            score: time,
            name: name
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        saveScore();
    }
}
nameEl.onkeyup = checkEnter;
submitButton.onclick = saveScore;
startEl.onclick = startQuiz;

