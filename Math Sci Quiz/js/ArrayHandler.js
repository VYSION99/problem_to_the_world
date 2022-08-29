var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');
var option5 = document.querySelector('#option5');
var option6 = document.querySelector('#option6');
var option7 = document.querySelector('#option7');
var option8 = document.querySelector('#option8');
var option9 = document.querySelector('#option9');
var option10 = document.querySelector('#option10');
var option11= document.querySelector('#option11');



// loading manu details
const loadManu = (math) => {    
    
    for (const i of math) {
        
        option1.innerText =math[0];
    option2.innerText =math[1];
    option3.innerText =math[2];
    option4.innerText =math[3];
    option5.innerText =math[4];
    option6.innerText =math[5];
    option7.innerText =math[6];
    option8.innerText =math[7];
    option9.innerText =math[8];
    option10.innerText = math[9];
    option11.innerText = math[10];
      //  console.log(i[1]);
       // console.log(i.manu5);
        
  }
}
manuItem().then((value) => loadManu(value));

// question data manipulations
const Question = document.querySelector(".questions");
const Answer1 = document.querySelector("#ans1");
const Answer2 = document.querySelector("#ans2");
const Answer3 = document.querySelector("#ans3");
const Answer4 = document.querySelector("#ans4");
const Answers = document.querySelectorAll(".answers");
let QuestionCount = 0;
var QuestionList = maths[QuestionCount];
let answer;
let scores = 3;
const LoadQuestion = () => {
  Question.innerText =maths[QuestionCount].questions;
  Answer1.innerText = maths[QuestionCount].a;
  Answer2.innerText = maths[QuestionCount].b;
  Answer3.innerText = maths[QuestionCount].c;
  Answer4.innerText = maths[QuestionCount].d;
};
LoadQuestion();

const getAnswer = () => {
    Answers.forEach((cunCheck) => {
        if (cunCheck.checked) {
            answer = cunCheck.id;
        
    }
  });
  return answer;
};

function checkFun() {
  var checkAnswer = getAnswer();
  if (checkAnswer === QuestionList.ans) {
    scores++;
    }
    
 QuestionCount++;

  if (QuestionCount < maths.length) {
    LoadQuestion();
  };
  if (QuestionCount === maths.length) {
    var btn = document.querySelector('.bt');
    var next = document.querySelector('.submit');
    next.remove();
    btn.innerHTML = '<button  type="button" class="submit" onclick="result()">Submit</button>';

  }

}

const result = () => {
  var results = document.querySelector('#resultScore');
  results.innerHTML=resultPortal;
    var messager = document.querySelector('.message');
    var score = document.querySelector('.scores');
    if (scores <= 27) {
        messager.innerHTML = '<div class="message">Ohh!!.. You fail the test please try again later</div>';
        messager.style.color = 'red';
    } else {
 messager.innerHTML ='<div class="message">Wow !! Congratulation!!.. You have passed the test sucessfully</div>';
         messager.style.color = 'lightgreen';
    }
    score.innerText = `At the end of the test you Scored ${scores / 3*30}%  /100%`;
}

//console.log(answer)

