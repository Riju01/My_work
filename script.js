let computerSequence = [];
let userSequence = [];
let button = ["red", "green", "blue", "teal"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let allButtons = document.querySelectorAll(".btn");

document.addEventListener("keypress", function () {
    if (start === false) {
        console.log("Game started");
        start = true;
        levelUp();
    }
});

function computerFlash(button) {
    button.classList.add("flash");
    setTimeout(function () {
        button.classList.remove("flash");
    }, 200);
}

function userFlash(button) {
    button.classList.add("userFlash");
    setTimeout(function () {
        button.classList.remove("userFlash");
    }, 200);
}

function levelUp() {
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = button[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`);
    computerSequence.push(randomColor);
    console.log(computerSequence);
    computerFlash(randomButton);
}

function checkAnswer(index) {
    if (userSequence[index] === computerSequence[index]) {
        if (userSequence.length === computerSequence.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgb(193, 245, 96, 0.5)";
        },150);
        reset();
    }
};

function buttonPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSequence.push(userColor);
    checkAnswer(userSequence.length - 1);
}

for (let btn of allButtons) {
    btn.addEventListener("click", buttonPress);
}

function reset() {
    start = false;
    userSequence = [];
    computerSequence = [];
    level = 0;
}
