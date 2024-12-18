let score = 0;

const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("clickButton");
const messageDisplay = document.getElementById("message");

clickButton.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;

    if (score >= 10) {
        messageDisplay.textContent = "You win!";
        clickButton.disabled = true;
        clickButton.style.backgroundColor = "#95a5a6";
        clickButton.style.cursor = "not-allowed";
    }
});
