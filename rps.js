let r=document.querySelector("#rock");
let p=document.querySelector("#paper");
let s=document.querySelector("#scissor");

r.addEventListener("mouseover",(e)=>{
    let x=e.pageX-r.offsetLeft;
    let y=e.pageY-r.offsetTop;
    r.style.setProperty("--posx",x + "px"); //posx variable from css is set to the location of x mousehover x axis on that button and appended with "px" as x is just a number but to set posx a value we need to set ot in px
    r.style.setProperty("--posy",y + "px");
})
p.addEventListener("mouseover",(e)=>{
//console.log(e.pageX,e.pageY); //accesses the direction of mouse from where its hovering
//console.log(p.offsetLeft,p.offsetTop); //accesses the position of paper image relative to screen
let x=e.pageX-p.offsetLeft;
let y=e.pageY-p.offsetTop ;//accesses the "exact position" on the button where mouse hovers 
//console.log(x,y);
p.style.setProperty("--posx",x + "px"); //posx variable from css is set to the location of x mousehover x axis on that button and appended with "px" as x is just a number but to set posx a value we need to set ot in px
p.style.setProperty("--posy",y + "px");
})
s.addEventListener("mouseover",(e)=>{
    let x=e.pageX-s.offsetLeft;
    let y=e.pageY-s.offsetTop;
    s.style.setProperty("--posx",x + "px"); //posx variable from css is set to the location of x mousehover x axis on that button and appended with "px" as x is just a number but to set posx a value we need to set ot in px
    s.style.setProperty("--posy",y + "px");
})

let win=document.querySelector(".win");
let hide=document.querySelector(".hide");
let userp=document.querySelector(".Userpoints");
let compp=document.querySelector(".Computerpoints");
let compc=document.querySelector(".compchoice");
let userc=document.querySelector(".userchoice");
let cpoint=0,upoint=0;
win.classList.add("hide");
function getcomputerchoice()
{
    let list=['R','P','S'];
let k=Math.floor(Math.random() * list.length);
comp_choice=list[k];
console.log("Computer Choice:",comp_choice);
if(comp_choice=='R')
compc.innerText=`Computer Choice : Rock`;
else if(comp_choice=='P')
    compc.innerText=`Computer Choice : Paper`;
else if(comp_choice=='S')
    compc.innerText=`Computer Choice : Scissor`;
}
function playgame(userchoice){
    getcomputerchoice();
    console.log("User Choice:",userchoice);
    
    if(userchoice=='R')
        userc.innerText=`User Choice : Rock`;
    else if(userchoice=='P')
        userc.innerText=`User Choice : Paper`;
    else if(userchoice=='S')
        userc.innerText=`User Choice : Scissor`;
    if(userchoice==comp_choice)
    {
        console.log("Result:Tie");
        win.classList.remove("hide");
        win.innerText="TIE";
        
    }
    else if((userchoice=='R'&&comp_choice=='S')||(userchoice === 'P' && comp_choice === 'R') ||
    (userchoice === 'S' && comp_choice === 'P'))
    {
        upoint++;
        console.log("Result:User wins");
        win.classList.remove("hide");
        win.innerText="USER WINS";
    }
    else{
        cpoint++;
        console.log("Result:Computer wins");
        win.classList.remove("hide");
        win.innerText="COMPUTER WINS";
    }
    console.log("Computer points:",cpoint);
    console.log("User points:",upoint);
    userp.innerText=`User Points:${upoint}`;
    compp.innerText=`Computer Points:${cpoint}`;
    
}
r.addEventListener("click",()=>{
    
    playgame('R')});
p.addEventListener("click",()=>playgame('P'));
s.addEventListener("click",()=>playgame('S'));


