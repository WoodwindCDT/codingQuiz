// Grabbing from HTML/ Global variables
var startSection = document.querySelector("#startCard");
var quizSection = document.querySelector("#quizSection");
var questionsEl = document.querySelector("#questions");
var validSectionC = document.querySelector("#validateSectionC");
var validSectionI = document.querySelector("#validateSectionI");
var endSection = document.querySelector("#endGameSection");
var scoreSection = document.querySelector("#highScoreSection");
var startButton = document.querySelector("#start-button");
var choiceContainer = document.querySelector("#choice-container");
var userHighScore = document.querySelector("#userHighscore");
var buttonA = document.getElementById("1");
var buttonB = document.getElementById("2");
var buttonC = document.getElementById("3");
var buttonD = document.getElementById("4");
var quizQuestions = [ 
    {
    question: "Commonly used data types DO NOT include: _____",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Alerts",
    choiceD: "Numbers",
    answer: "3"
    },
    {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    answer: "1"
    },
    {
    question: "This is used primarily to add styling to a web page: _____",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    answer: "2"
    },
];

var finalQuestionIndex = quizQuestions.length;
var questionIndex = 0;
var totalCorrect = 0;
var finalScore = 0;

var timerE1 = document.querySelector("#count");
var count;
var timer = 75;
var timeInterval;

var genQuesAns = function () {
    validSectionC.style.display = "none";
    validSectionI.style.display = "none";

    if (questionIndex === finalQuestionIndex){
        return endQuiz();
    }

    var currentQuestion = quizQuestions[questionIndex];
    questionsEl.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

var startQuiz = function() {
    startSection.style.display = "none";
    quizSection.style.display = "block";
    
    // Function for timer
    timeInterval = setInterval(function() {
    if (timer >= 1) {
        timer --;
        timerE1.textContent = timer;
    }
    if (timer === 0) {
        clearInterval(timer);
        timerE1.textContent = "";
        endQuiz();
    }
     }, 10);
     genQuesAns();
};

var endQuiz = function() {
    quizSection.style.display = "none";
    endSection.style.display = "block";

    userHighscore.textContent = finalScore;
};

var showHighScore = function() {
    endSection.style.display = "none";
    scoreSection.style.display = "block";
};

//var startQuiz = function() {
   // startSection.style.display = "none";
   // quizSection.style.display = "block";
//}

// Quiz Card Checking the Answer
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionInd].correctAnswer;
        if (answer == correct) {
            finalScore++;
            console.log(finalScore);
            currentQuestionInd++;
            validSectionC.style.display = "block";
            genQuizAnswer();
        }
        else if (answer !== correct) {
            validSectionI.style.display = "block";
            finalScore--;
            currentQuestionInd++;
            genQuizAnswer();
        }
}

// Validate Section
// var validate
    

// firstCard();
startButton.addEventListener("click", startQuiz);