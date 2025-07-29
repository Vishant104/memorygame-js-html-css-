let h3=document.querySelector("h3");
let start=false;
let clickcard=0;
let cardsrc=[];
let cardbtn=[];
let move=0;
let match=0;
document.addEventListener("keypress",function() {
    if(start==false){
        start=true;
        h3.innerText="Game Start";
    }
});

let btns= document.querySelectorAll(".card");

function cardflip(){
  if(!start|| this.classList.contains("flipped")) return;
  clickcard++;
  let btn=this;
  btn.classList.add("flipped");
  cardbtn.push(btn);
  let id=btn.getAttribute("data-id");
  cardsrc.push(id);
  if(clickcard===2){
    move++;
    setTimeout(check,200);
  }
}

function check(){
  if(cardsrc[0]==cardsrc[1]){
    h3.innerText=`Match found Move : ${move}`;
    match++;
    cardbtn[0].classList.add("matched");
    cardbtn[1].classList.add("matched");
  }else{
    h3.innerHTML=`Try again! Move : ${move}`;
    cardbtn[0].classList.remove("flipped");
    cardbtn[1].classList.remove("flipped");    
  }
  clickcard = 0;
  cardsrc = [];
  cardbtn = [];
  if(match==8){
  h3.innerHTML=`You win! <br> Your moves :${move}`;
}

}


for(let btn of btns){
  btn.addEventListener("click",cardflip);
}

let restartBtn=document.querySelector("#restartBtn");
restartBtn.addEventListener("click", () => {
  location.reload();
});
