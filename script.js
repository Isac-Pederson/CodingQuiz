var startBtn = document.querySelector(".starting-button");
var choiceBtn = document.querySelector(".button");
var questionDisplay = document.querySelector("#question-target");
var choiceOne = document.querySelector("#ch1");
var choiceTwo = document.querySelector("#ch2");
var choiceThree = document.querySelector("#ch3");
var choiceFour = document.querySelector("#ch4");
var timerCount = document.querySelector("#timer");
var scoreCount = document.querySelector(".score");
var container = document.querySelector(".block")
var answer = document.querySelector("#answer");
var counter = document.querySelector("#timer");
var restart = document.querySelector(".restart")
var restartBtn = document.querySelector("#restart")
var highscoresBtn = document.querySelector(".highscores-btn")
var highscore = document.querySelector(".highscore")
var score = 0;
var seconds = 64;
var i = 0;


// The answers are incorrect. Instead I matched up the correct answer with the same button for the next number in the array
// You can look at the console to see the situation. I'm out of time for this project and this was the hardest thing for me to complete.

var questions = [

    {
        title: "What game features code written in Java?",
        choices: ["Factorio", "Hollow Knight", "Minecraft","Castle Crashers"],
        answer: "NULL",
    },
    {
        title: "When was Javascript made?",
        choices:["1994","1995","1993","1996"],
        answer: "1993", //Minecraft
    },
   {
        title: "Who invented JavaScript?",
        choices: ["Elon Musk", "Mark Crockford", "Brendan Eich", "Henry Ford"],
        answer: "Mark Crockford",//1995
   },
   {
        title: "Which language is used for .NET apps?" ,
        choices: ["Python", "C#", "Javascript", "C++"],
        answer: "Javascript",//Brendan Eich
   },

    {
        title: "What is the first commercially available programming language?",
        choices: ["C","Speakeasy","Mark 1","FORTRAN"],
        answer: "Speakeasy", //C#
    },

    {
        title: "What is a string?",
        choices: ["A sequence of numbers", "A sequence of characters", "True or False statement", "A decimal number"],
        answer: "",//FORTRAN
    },

    {
        title: "What does a variable do?",
        choices: ["Loop information", "Hide information", "Store information", "Log information"],
        answer: "Loop information",//A sequence of characters
    },

    {
        title: "When was C# made?",
        choices: ["2003","2000","1999","1994"],
        answer: "1999", //Store information
    },

    {
        title: "What is a boolean?",
        choices: ["A sequence of numbers", "True or false statment", "A for loop","An html element"],
        answer: "True or false statment", //2000
    },

    {
        title: "What does IDE mean?",
        choices: ["Integrated Development Environment", "Interspersed Development Environment", "Interspersed Development Environment", "Interspersed Development Element", "Integrated Development Element"],
        answer: "Interspersed Development Environment", //True or false statment
    },

    {
        title: "",
        choices: [""],
        answer: "Integrated Development Environment", //Integrated Development Environment
    },

];

function timer() {
   
    function tick() {
        var counter = document.getElementById("timer");
        seconds--;
        counter.innerHTML = 'Time Left:' + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick,1000 );
        }else if (seconds === 0){
                gameOver();
                return seconds/60 | 0;
        }
    }
    tick();
}
// Starts startQuiz function and shows next question, if the answer is correct then add 5 score, if wrong take off three seconds from counter.
function showQuestion(event,x){
    startQuiz();
   questionDisplay.textContent = questions[x].title;
   choiceOne.textContent = questions[x].choices[0];
   choiceTwo.textContent = questions[x].choices[1];
   choiceThree.textContent = questions[x].choices[2];
   choiceFour.textContent = questions[x].choices[3];
   if (x === 10) {
       gameOver();
        
   }

    // if user picks correct answer add 5 score, else subtract three seconds
    if (questions[x].answer === event.target.innerHTML) {
        score = score + 5;
        scoreCount.textContent = 'Score: ' + score;
        console.log(score);

    }else{
        seconds = seconds-3;
    }


}
// hides quiz and starts timer
function startQuiz(){
    startBtn.classList.add('hide');
    scoreCount.innerHTML = 'Score: ' + score;
    
}
// adds one to global variable for the arrays
$(".button").click(function () {
    i++;
    showQuestion(event, i)
});
// starts question off at 0 in array and also reads showQuestion function
startBtn.addEventListener("click" ,function(){
    showQuestion(event,i);
    timer();
});
// game over and brings you to highscore
function gameOver(){
    seconds = 0;
    alert("Game Over!")
    window.location = 'highscores.html'
}

