const quiz = [{
    question: "Q1: what is most used programming language? ",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
},
{
    question: "Q2: Who is the President of Pakistan?",
    ans1text: "zarfdari",
    ans2text: "Imran khan",
    ans3text: "Nawaz Shareef",
    ans4text: "shehbaz Shareef",
    answer: "shehbaz Shareef",

},
{
    question: "Q3: JavaScript launched in which year?",
    ans1text: "1995",
    ans2text: "1994",
    ans3text: "2000",
    ans4text: "1996",
    answer: "1995",

},
{
    question: "Q4: Who is the President of America?",
    ans1text: "zarfdari",
    ans2text: "Imran khan",
    ans3text: "Abrham lincoln",
    ans4text: "Donald trump",
    answer: "Donald trump",

},
{
    question: "Q5: Who is the Prime Minister of India?",
    ans1text: "N.Modi",
    ans2text: "J.nehru",
    ans3text: "Indra gandhi",
    ans4text: "Rahul gandhi",
    answer: "N.Modi",

},
{
    question: "Q6:America was discovered in?",
    ans1text: "1500",
    ans2text: "1670",
    ans3text: "2024",
    ans4text: "1492",
    answer: "1492",

},
{
    question: "Q7: Holy palace of Islam?",
    ans1text: "makkah",
    ans2text: "Ceaser Palace",
    ans3text: "jersuelam",
    ans4text: "Church",
    answer: "makkah",

},
{
    question: "Q8: Who makes the most century in odi ",
    ans1text: "babar azam",
    ans2text: "Imran khan",
    ans3text: "glenn maxwell",
    ans4text: "virat Kholi",
    answer: "virat Kholi",

},
{
    question: "Q9:Kingdom of heaven based on?",
    ans1text: "jeruslam",
    ans2text: "Cairo",
    ans3text: "SAnaa",
    ans4text: "England",
    answer: "jeruslam",

},
{
    question: "Q10 :Who is the G.O.A.T  ?",
    ans1text: "Virat Kholi",
    ans2text: "John Cena",
    ans3text: "Ronaldo",
    ans4text: "Messi",
    answer: "Ronaldo",

}
]

const question = document.getElementById("question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
const questionCounter = document.getElementById("currentQuestion");

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;
questionCounter.textContent = currentQuestion + 1;
}

loadQuestion();

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    if (checkedAns === null) {
        Swal.fire("Please select answer");
        
        
    } 
    else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }

        checkedAns.checked = false;
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            loadQuestion();
        } else {
            //alert("Your Score is" +" "+ score +" "+ "out of " + quiz.length)
            Swal.fire({
                position: "top-center",
                // icon: "success",
                title: "Your Score is" +" "+ score +" "+ "out of " + quiz.length,
                showConfirmButton: true,
            }).then(() => {
                location.reload();
            });
        }
        
    }
    
});

//TIMER FUNCTIONALITY

function startReverseTimer(seconds) {
    let timer = document.getElementById("timer");
    let countdown = setInterval(() => {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        timer.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
        if (seconds-- <= 0) {
            clearInterval(countdown)
            Swal.fire({
                title: "Time Up",
                text: "Please Try Again",
                icon: "warning"
              });
        } ;
    }, 1000);
}


startReverseTimer(120);
