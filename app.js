var quiz = [
    {
        question: "1: What does HTML stand for?",
        option1: "Home Tool Markup Language",
        option2: "Hyper Text Markup Language",
        option3: "Hyperlinks and Text Markup Language",
        option4: "Hyper Text Makeup Language",
        answer: "Hyper Text Markup Language",
    },
    {
        question: "2: Which HTML tag is used to define an internal style sheet?",
        option1: "link",
        option2: "script",
        option3: "css",
        option4: "style",
        answer: "style",
    },
    {
        question: "3: Which HTML element is used to display the largest heading?",
        option1: "&lt;h1&gt;",
        option2: "&lt;h6&gt;",
        option3: "&lt;header&gt;",
        option4: "&lt;head&gt;",
        answer: "&lt;h1&gt;",
    },
    {
        question: "4: What does CSS stand for?",
        option1: "Creative Style Sheets",
        option2: "Cascading Style Sheets",
        option3: "Computer Style System",
        option4: "Colorful Style Sheets",
        answer: "Cascading Style Sheets",
    },
    {
        question: "5: Which CSS property controls the text size?",
        option1: "font-style",
        option2: "text-size",
        option3: "font-size",
        option4: "size",
        answer: "font-size",
    },
    {
        question: "6: Which HTML attribute is used to provide an alternate text for images?",
        option1: "src",
        option2: "alt",
        option3: "title",
        option4: "href",
        answer: "alt",
    },
    {
        question: "7: Inside which HTML element do we put JavaScript?",
        option1: "&lt;js&gt;",
        option2: "&lt;script&gt;",
        option3: "&lt;javascript&gt;",
        option4: "&lt;code&gt;",
        answer: "&lt;script&gt;",
    },
    {
        question: "8: Which operator is used to assign a value in JavaScript?",
        option1: "=",
        option2: "==",
        option3: "===",
        option4: "=>",
        answer: "=",
    },
    {
        question: "9: Which HTML tag is used to create a hyperlink?",
        option1: "&lt;link&gt;",
        option2: "&lt;href&gt;",
        option3: "&lt;a&gt;",
        option4: "&lt;url&gt;",
        answer: "&lt;a&gt;",
    },
    {
        question: "10: Which CSS property is used to change the background color?",
        option1: "color",
        option2: "bgcolor",
        option3: "background-color",
        option4: "background-style",
        answer: "background-color",
    },
];

var container = document.getElementsByClassName("container")[0]

var questions = document.getElementById("questions");
var nextBtn = document.getElementById("nextBtn")
var index = 0;
var score = 0
function showResult(){
    var totalQuestions = quiz.length;
    var wrong = totalQuestions - score;
    var percentage = ((score / totalQuestions) * 100).toFixed(2);  
    var resultMessage = percentage >= 50 ? "🎉 Congratulations! You Passed!" : 
     "😔 Sorry! You Failed!";
    var btnClass = percentage >= 50 ? "btn-success" : "btn-danger";

    container.innerHTML = `
           <div class="card text-center">
            <div class="card-header">SkillCheck Quiz</div>
            <div class="card-body">
                <h5 class="card-title">${resultMessage}</h5>
                <h5 class="card-text">Correct Questions: ${score}</h5>
                <h5 class="card-text">Wrong Questions: ${wrong}</h5>
                <h5 class="card-text">Percentage: ${percentage}%</h5>
                <a href="" class="btn ${btnClass}">Retake</a>
            </div>
        </div>
    `;

    
}
function renderQuiz() {
     if (index >= quiz.length) {
       showResult()
        return;
     }
    questions.innerHTML = `
<div id="question">${quiz[index].question}</div>

        <ul class="list-group">
          <li class="list-group-item">
            <input onclick="nextEnabled()" 
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="${quiz[index].option1}"
              id="firstRadio"
            />
            <label class="form-check-label" for="firstRadio">${quiz[index].option1}</label>
          </li>
          <li class="list-group-item">
            <input onclick="nextEnabled()" 
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="${quiz[index].option2}"
              id="secondRadio"
            />
            <label class="form-check-label" for="secondRadio"
              >${quiz[index].option2}</label
            >
          </li>
          <li class="list-group-item">
            <input onclick="nextEnabled()" 
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="${quiz[index].option3}"
              id="thirdRadio"
            />
            <label class="form-check-label" for="thirdRadio">${quiz[index].option3}</label>
          </li>
          <li class="list-group-item">
            <input onclick="nextEnabled()" 
              class="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="${quiz[index].option4}"
              id="forthRadio"
            />
            <label class="form-check-label" for="forthRadio">${quiz[index].option4}</label>
          </li>
        </ul>
`;
    nextBtn.disabled = true

   
}


function nextEnabled() {
    nextBtn.disabled = false
     
}
 function nextQuestion() {
    var options = document.getElementsByClassName("form-check-input");
    
   
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked && options[i].value === quiz[index].answer) {
            score++;
        }
    }

    index++;  

    
    if (index === quiz.length - 1) {
        nextBtn.innerText = "Submit";
    }

    
    if (index >= quiz.length) {
        showResult();
    } else {
        renderQuiz();
    }
}

nextBtn.onclick = nextQuestion;
renderQuiz();