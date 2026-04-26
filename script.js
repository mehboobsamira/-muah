const messages = [
    "I miss you ❤️",
    "You are my everything 💖",
    "Stay forever 💞",
    "You are my happiness 🌍"
];

let startDate = new Date("2025-07-06");

function startLove() {
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");

    document.getElementById("bgMusic").play();

    createStars();
    startTimer();
    startSlideshow();
}

document.addEventListener("click", function () {
    let msg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = msg;
});

function createStars() {
    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        document.body.appendChild(star);
    }
}

function openLetter() {
    document.getElementById("letter").classList.remove("hidden");
}
function closeLetter() {
    document.getElementById("letter").classList.add("hidden");
}

function openPuzzle() {
    document.getElementById("puzzle").classList.remove("hidden");
}

function checkPuzzle() {
    let name = document.getElementById("nameInput").value.toLowerCase();
    let date = document.getElementById("dateInput").value;

    if (name === "mehboob" && date === "06-07-2025") {
        document.getElementById("puzzle").classList.add("hidden");
        document.getElementById("surprise").classList.remove("hidden");
    } else {
        alert("Wrong 💔 Try again!");
    }
}

function startTimer() {
    setInterval(() => {
        let now = new Date();
        let diff = now - startDate;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("timer").innerText =
            "Together for " + days + " days ❤️";
    }, 1000);
}

let images = ["a.jpg", "b.jpg"];
let index = 0;

function startSlideshow() {
    setInterval(() => {
        index = (index + 1) % images.length;
        document.getElementById("slideImg").src = images[index];
    }, 3000);
}
