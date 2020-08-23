// Grabbing from HTML/ Global variables
var startSection = document.querySelector("#startCard");
var quizSection = document.querySelector("#quizSection");
var questionsEl = document.querySelector("#questions");
var validSectionC = document.querySelector("#validateSectionC");
var validSectionI = document.querySelector("#validateSectionI");
var endSection = document.querySelector("#endGameSection");
var scoreSection = document.querySelector("#highScoreSection");
var startButton = document.querySelector("#start-button");
var submitButton = document.querySelector("#submitScore");
var choiceContainer = document.querySelector("#choice-container");
var userHighScore = document.querySelector("#userHighscore");
var userDisplayScore = document.querySelector("#highscore-score");
var userDisplayName = document.querySelector("#highscore-initials");
var userInitials = document.querySelector("#userInit");
var buttonA = document.getElementById("1");
var buttonB = document.getElementById("2");
var buttonC = document.getElementById("3");
var buttonD = document.getElementById("4");

// Question Array 
var quizQuestions = [ 
    {
    question: "Commonly used data types DO NOT include: _____",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Alerts",
    choiceD: "Numbers",
    answer: "c"
    },
    {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    answer: "a"
    },
    {
    question: "This is used primarily to add styling to a web page: _____",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    answer: "b"
    },
    {
    question: "When is localStorage data cleared?",
    choiceA: "On browser close",
    choiceB: "On page reload",
    choiceC: "It does not expire",
    choiceD: "On computer restart",
    answer: "c" 
    },
    {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "Href",
    choiceB: "Src",
    choiceC: "Class",
    choiceD: "Index",
    answer: "b"
    },
];

var finalQuestionIndex = quizQuestions.length;
var questionIndex = 0;
var totalCorrect = 0;
var correct;

var timerE1 = document.querySelector("#count");
var count;
var timer = 75;
var finalScore = 0;
var timeInterval;

var genQuesAns = function () {
    clearInterval(validSectionC, validSectionI);
    if (questionIndex === finalQuestionIndex){
        return endQuiz();
    }

    // To populate buttons from array
    var currentQuestion = quizQuestions[questionIndex];
    questionsEl.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Start Quiz Card
var startQuiz = function() {
    startSection.style.display = "none";
    quizSection.style.display = "block";
    
    // Function for timer
    timeInterval = setInterval(function() {
    if (timer >= 1) {
        timer --;
        timerE1.textContent = timer;
    }
    if (timer == 0) {
        clearInterval(timer);
        timerE1.textContent = "";
        endQuiz();
    }
     }, 1000);
     genQuesAns();
     
};

// After user has answered all questions or timer = 0
var endQuiz = function() {
    // To display user's score
    userHighscore.textContent = finalScore + timer;
    // Hide functionality
    quizSection.style.display = "none";
    endSection.style.display = "block";
    validSectionC.style.display = "none";
    validSectionI.style.display = "none";

    // To find value of initials string
    userInitials.value = "";

        submitButton.addEventListener("click", function highscore() {

        if ( userInitials.value === "") {
            alert("Please Enter Initials!")
            return false;
        }
        else {
            var userSavedScore = JSON.parse(localStorage.getItem("userSavedData")) || [];
            var activeUser = userInitials.value;
            var activeUserProfile = {
                Name: activeUser,
                HighScore: finalScore
            };

            userSavedScore.push(activeUserProfile);
            localStorage.setItem("userSavedData", JSON.stringify(userSavedScore));
            
            showHighScore();
        }         
    });

// Card to show recorded High Scores
var showHighScore = function() {
        endSection.style.display = "none";
        scoreSection.style.display = "block";
        startSection.style.display = "none";
        quizSection.style.display = "none";
        validSectionC.style.display = "none";
        validSectionI.style.display = "none";

        generateHighScore();
}

function generateHighScore() {
    // To display score & name
    userDisplayName.innerHTML = "";
    userDisplayScore.innerHTML = "";

    var currentData = JSON.parse(localStorage.getItem("userSavedData"));
        for (i = 0; i < currentData.length; i++) {
            var newUserName = document.createElement("ol");
            var newUserScore = document.createElement("ol");
            newUserName.textContent = currentData[i].Name;
            newUserScore.textContent = currentData[i].HighScore;
            userDisplayName.appendChild(newUserName);
            userDisplayScore.appendChild(newUserScore);
        }
    }
};

// Quiz Card Checking the Answer
function checkAnswer(answer) {
    correct = quizQuestions[questionIndex].answer;
        
    if (answer === correct && questionIndex !== finalQuestionIndex) {
            finalScore += 5;
            timer += 5;
            questionIndex ++;
            validSectionC.style.display = "block";
            validSectionI.style.display = "none";
            genQuesAns();
        }
        else if (answer !== correct && questionIndex !== finalQuestionIndex) {
            finalScore -= 12;
            timer -= 15;
            questionIndex ++;
            validSectionC.style.display = "none";
            validSectionI.style.display = "block";
            genQuesAns();
        }
    };

startButton.addEventListener("click", startQuiz);