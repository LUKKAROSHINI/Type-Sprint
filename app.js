const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "To be or not to be, that is the question.",
    "A journey of a thousand miles begins with a single step.",
    "All that glitters is not gold.",
    "Actions speak louder than words.",
    "Practice makes perfect.",
    "You miss 100% of the shots you don't take.",
    "The early bird catches the worm.",
    "Fortune favors the bold.",
    "Every cloud has a silver lining.",
    "Honesty is the best policy.",
    "Rome wasn't built in a day.",
    "When in Rome, do as the Romans do.",
    "The pen is mightier than the sword.",
    "A picture is worth a thousand words.",
    "Beauty is in the eye of the beholder.",
    "Better late than never.",
    "Birds of a feather flock together.",
    "Curiosity killed the cat.",
    "Don't count your chickens before they hatch.",
    "Don't put all your eggs in one basket.",
    "Good things come to those who wait.",
    "If it ain't broke, don't fix it.",
    "It's always darkest before the dawn.",
    "Knowledge is power.",
    "Laughter is the best medicine.",
    "Let sleeping dogs lie.",
    "Look before you leap.",
    "Necessity is the mother of invention.",
    "No man is an island.",
    "Old habits die hard.",
    "Out of sight, out of mind.",
    "Patience is a virtue.",
    "The grass is always greener on the other side.",
    "Time is money.",
    "Two heads are better than one.",
    "When the going gets tough, the tough get going.",
    "You can't judge a book by its cover."
];

const game = {
    start: 0,
    end: 0,
    user: '',
    arrText: "",
};

btn.addEventListener('click', () => {
    if (btn.textContent === "Start") {
        play();
        typeArea.value = "";
        typeArea.disabled = false;
    } else if (btn.textContent === 'Done') {
        typeArea.disabled = true;
        main.style.borderColor = "white";
        end();
    }
});

function play() {
    let randText = Math.floor(Math.random() * words.length);
    main.textContent = words[randText];
    game.arrText = words[randText];
    main.style.borderColor = "#c8c8c8";
    btn.textContent = "Done";
    const duration = new Date();
    game.start = duration.getTime(); // unix timestamp
}

function end() {
    const duration = new Date();
    game.end = duration.getTime();
    const totalTime = (game.end - game.start) / 1000;
    game.user = typeArea.value;
    const correct = results();
    main.style.borderColor = "white";
    main.innerHTML = `Time: ${totalTime.toFixed(2)} seconds. Score: ${correct.score} out of ${correct.total}`;
    btn.textContent = "Start";
}

function results() {
    let valueOne = game.arrText.split(" ");
    let valueTwo = game.user.split(" ");
    let score = 0;
    valueOne.forEach((word, idx) => {
        if (word === valueTwo[idx]) {
            score++;
        }
    });
    return { score, total: valueOne.length };
}
