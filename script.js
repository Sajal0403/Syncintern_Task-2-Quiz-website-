const quizdb = [
    {
         question: "Who was the wife of Ravan?",
         a: "Mandodari",
         b: "Sita",
         c: "Tara",
         d: "Trijata",
         ans: "ans1"
        },
    {
        question: "Who was the father of Angad?",
        a: "Sugreev",
        b: "Hanuman",
        c: "Jaamvant",
        d: "Baali",
        ans: "ans4"
        },
    {
        question: "What was the name of Ravan's charioteer?",
        a: "Taanga",
        b: "Garuda",
        c: "Navratna",
        d: "Pushpak",
        ans: "ans4"
        },
    {
        question: "Who killed Meghnath?",
        a: "Lakshaman",
        b: "Ram",
        c: "Hanumman",
        d: "Sugreev",
        ans: "ans1"
    }
    
    

];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')

const answers = document.querySelectorAll('.answer')
const showscore = document.querySelector('#showscore')

let questioncount = 0;
let score = 0;

const loadquestion = () =>{

    const quizlist =quizdb[questioncount]
    
    question.innerHTML=quizlist.question;

    option1.innerHTML=quizlist.a;
    option2.innerHTML=quizlist.b;
    option3.innerHTML=quizlist.c;
    option4.innerHTML=quizlist.d;
        


}
loadquestion();
const getcheckAnswer = ()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;

}
const deselectAll = ()=> {
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click',() =>{
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizdb[questioncount].ans){
        score++;
    };

    questioncount++;
    deselectAll();

    if(questioncount < quizdb.length){
        loadquestion();
    }
    else{
        showscore.innerHTML =
       ` <h3>You scored ${score}/${quizdb.length}✌</h3>
          <button class="btn" onclick="location.reload()"> Play again</button>`;
       
         showscore.classList.remove('scorearea');
    }

});

