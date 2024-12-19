// メニュー切り替え処理
const menuButtons = document.querySelectorAll(".menu-button");
const pages = document.querySelectorAll(".page");

menuButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetPage = button.getAttribute("data-target");

        // すべてのページを非表示
        pages.forEach(page => page.classList.remove("active"));

        // 対象ページを表示
        document.getElementById(targetPage).classList.add("active");
    });
});

// キャラ詳細表示
const characterButtons=document.querySelectorAll(".character-button");
const characterDetail =document.getElementById("character-detail");

characterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const charId =button.getAttribute("data-char");
        characterDetail.innerHTML = `<p>キャラクター${charId}の詳細情報が表示されます。</p>`;
    });
});

// 探索進行度
const stageButton =document.querySelector(".stage-button");
const progressPercentage= document.getElementById("progress-percentage");

let progress=0;
stageButton.addEventListener("click", () => {
    if(progress < 100){
        progress += 10;
        progressPercentage.textContent=`${progress}%`;

        if(progress===100){
            alert("探索完了");
        }
    }
});