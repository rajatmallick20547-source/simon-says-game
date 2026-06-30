let gameseq = [];
let userseq = [];

let btnColor = ["red","purple","green","yellow"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let body = document.querySelector('body');



document.addEventListener('keypress',function(){
    if(started == false){
        console.log("game is started");
        started =true;
        levelUp();
    }
})


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelUp(){
    userseq = [];
    level++;
    h3.innerText = `level ${level}`
    let randomInd = Math.floor(Math.random()*4);
    let randcolor = btnColor[randomInd];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnFlash(randBtn);
}

function ansCheck(inx){
    if(gameseq[inx] == userseq[inx]){
       if(userseq.length == gameseq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        h3.innerText = `Game over your score is ${level} press any key to start again!`;
        body.classList.add("redFlash");
        setTimeout(function(){
            body.classList.remove("redFlash")
        },100)
        reset();
    }
}

function btnPressed(){
    let btn  = this;
    btnFlash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    ansCheck(userseq.length-1);    
}

function reset(){
    started = false;
    gameseq =[];
    userseq =[];
    level = 0;
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPressed)
}