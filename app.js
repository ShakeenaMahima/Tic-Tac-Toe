let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newGamebtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
           box.innerText="0";
           box.style.color="#33658a";
           turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="#4059ad";
           turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();

        if(count=== 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText=`Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}

const checkWinner=()=>{
    
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                shoWinner(pos1val);
                return true;
            }
        }
    }

};

const shoWinner=(winner)=>{
    msg.innerText=`Congo,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);



