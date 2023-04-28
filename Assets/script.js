// var button = document.createElement('button');
// button.innerText = ('Start Quiz!');
// button.addEventListener('click', startQuiz)

var startPageEl = document.querySelector('.start-page');
var quizPageEl = document.querySelector('.app');

var startButtonEl = document.querySelector('.start-button');
var timerEl = document.getElementById("countDownDisplay")
var choiceOne = document.getElementById("choiceOne");
var choiceTwo = document.getElementById("choiceTwo");
var choiceThree = document.getElementById("choiceThree");
var choiceFour = document.getElementById("choiceFour")
var timerID;
var startSeconds = 5;
// console.log(startButtonEl);

function checkanswer(){
    console.log("clicked!!!!!")
    console.log(this)
}

choiceOne.addEventListener("click", checkanswer);
choiceTwo.addEventListener("click", checkanswer);
choiceThree.addEventListener("click", checkanswer);
choiceFour.addEventListener("click", checkanswer);

startButtonEl.addEventListener('click',startQuiz)
function startQuiz (){
    startPageEl.style.display = 'none';
    quizPageEl.style.display = 'block';
    timerEl.textContent = startSeconds
    timerID = setInterval(countdown,1000);
}
function countdown(){
    startSeconds--;
    timerEl.textContent = startSeconds;
    if(startSeconds <= 0){
        clearInterval(timerID)
    }
}
//subtracts one
// startSeconds--;
// console.log("this is the second time: ", startSeconds)
// startSeconds--;
// console.log("this is the third time: ", startSeconds)





let questions= [
    {
        question: "Which of the following is an element for the box model?",
        answers: [
            { text: "Margin", correct: true},
            { text: "Absolutes", correct: false},
            { text: "Psuedo-class", correct: false},
            { text: "Flex", correct: false},
        ]
    },
    {
        question: "What is an array?",
        answers: [
            { text: "A list of separated operators", correct: false},
            { text: "A list of separated values", correct: true},
            { text: "A list of console.logs", correct: false},
            { text: "A grocery list", correct: false},
        ]
    },
    {
        question: "What is a Boolean value?",
        answers: [
            { text: "A value with a string", correct: false},
            { text: "A value with user input", correct: false},
            { text: "A true or false value", correct: true},
            { text: "A if, else condition", correct: false},
        ]
    },
    {
        question: "Which of the following defines what DOM stands for?",
        answers: [
            { text: "Document Override Model", correct: false},
            { text: "Days on Market", correct: false},
            { text: "Document Object Maker", correct: false},
            { text: "Document Object Model", correct: true},
        ]
    }
];

var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");

questionElement.innerText=questions[0].question



