let playingto = document.querySelector("#playingto")
let score = document.querySelector("#scoretitle")

let player1 = {
    score: 0,
    increment: function () {
        this.score += 1;
    },
    reset: function () {
        this.score = 0;
    }
}
let player2 = {
    score: 0,
    increment: function () {
        this.score++;
    },
    reset: function () {
        this.score = 0;
    }
}
let max_score = 3;
playingto.addEventListener('change', () => {
    resetScores()
    max_score = playingto.value;
})

let button1 = document.querySelector("#player1");
let button2 = document.querySelector("#player2");

button1.addEventListener('click', () => {
    keepScore(player1)
})
button2.addEventListener('click', () => {
    keepScore(player2)
})

function keepScore(player) {
    player.increment();
    if (player.score < max_score) {
        score.innerText = `${player1.score} to ${player2.score}`
    }
    else {

        score.innerText = `${player1.score} to ${player2.score}`
        score.style.color = "red"
        button1.disabled = true;
        button2.disabled = true;
    }
}


let reset = document.querySelector("#reset");
reset.addEventListener('click', resetScores)


function resetScores() {
    player1.reset();
    player2.reset();
    button1.disabled = false;
    button2.disabled = false;
    score.innerText = "0 to 0"
}