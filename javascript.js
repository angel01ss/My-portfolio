let themeButton = document.querySelector(".themebutton");
let submitBtn = document.querySelector(".button2");

let sound = new Audio("pop.wav");

// DARK MODE
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeButton.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";

    sound.currentTime = 0;
    sound.play();
});

// SUBMIT BUTTON SOUND
submitBtn.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
});




