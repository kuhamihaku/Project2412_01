const dialogueText = document.getElementById("dialogue-text");
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");

let affection = 0; // 好感度

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const reaction = choice.getAttribute("data-reaction");

        // 選択肢による反応を分岐
        if (reaction === "positive") {
            dialogueText.textContent = "「嬉しい！ありがとう！」";
            affection += 10;
        } else if (reaction === "neutral") {
            dialogueText.textContent = "「そうなんだ。まあまあだね。」";
            affection += 5;
        } else if (reaction === "negative") {
            dialogueText.textContent = "「そっか…ちょっと残念だな。」";
            affection -= 5;
        }

        // 好感度を結果表示
        updateResult();
    });
});

function updateResult() {
    if (affection >= 20) {
        result.textContent = "彼女はあなたに好意を持ち始めた！";
    } else if (affection >= 10) {
        result.textContent = "彼女は少し気になっている様子だ。";
    } else if (affection < 0) {
        result.textContent = "彼女はちょっと悲しそうだ…";
    } else {
        result.textContent = "彼女はまだ普通の態度だ。";
    }
}
