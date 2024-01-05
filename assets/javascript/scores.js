var scoreBtn = document.querySelector("#view-high-scores")

function showScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });
    highscores.forEac(function(score) {
        var liChoice = document.createElement("li");
        liChoice.textContent = score.name + " - " + score.score;
        var olElement = document.getElementById("highscores");
        olElement.appendChild(liTag);
    });
}

function clearScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
} document.getElementById("clear").onclick = clearScores;

showScores();