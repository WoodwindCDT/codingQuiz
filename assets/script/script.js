// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score

var startSectionEl = document.querySelector("#startCard");
var quizSectionEl = document.querySelector("#quizSection");
var validSectionEl = document.querySelector("#validateSection");
var endSectionEl = document.querySelector("#endGameSection");
var scoreSectionEl = document.querySelector("#highScoreSection");
var startButton = document.querySelector("#start-button");

var timerE1 = document.querySelector("#count");
var correct;
var totalCorrect = 0;
var finalScore = 0;
var timeInterval;

var quizQuestions = [ {
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
    correctAnswer: "c"},
  {
    question: "DOM stands for _____.",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"},
   {
    question: "This is used primarily to add styling to a web page: _____",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    correctAnswer: "b"},
];

function count() {
    var timer = 75;

timeInterval = setInterval(function() {
    if (timer >= 1) {
        timer --;
        timerE1.textContent = timer;
    }
    else if (timer = 0) {
        timerEl.textContent = "";
    }
     }, 1000);
}

// Hide Card Funtion
var hideCard = function() {
    var hide = document.getElementById("startCard");
    hide.style.display = "none";
    if (hide.style.display = "none") {
        quizSectionEl.style.display = "block";
    }
};

// Start Card
var firstCard = function() {
    startButton = document.querySelector("#start-button");
    startButton.addEventListener("click", hideCard, count);
}

// Quiz Card
var secondCard = function() {
    timerE1.textContent = count;
    for (i=0; i < questions.length; i++) {
        var answer = confirm(questions[i].question);
        if (answer === questions[i].correctAnswers) {
            alert("correct")
            totalCorrect ++;
        }
        else {
            display
        }
    }
};

// Validate Section
var validate
    

firstCard();
startButton.onclick = count;