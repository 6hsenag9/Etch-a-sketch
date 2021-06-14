let container = document.querySelector(".container");
let num ;
do{
    num = prompt("enter a number between 1 and 100");
    num = Number(num);
}
while(num>100 || num<1)

num2 = num*num;
console.log(num2);
for(i=0;i<num2;i++){
    let div = document.createElement('div');
    div.classList.add('child');
    container.append(div);
}

let containerStyle = container.style;
// container.style.cssText = `grid-template-columns: repeat(${num},1fr);
// grid-template-rows: repeat(${num},1fr)`;
// container.style.cssText=``;
containerStyle.gridTemplateColumns = `repeat(${num},1fr)`;
containerStyle.gridTemplateRows = `repeat(${num},1fr)`;
let children = document.querySelectorAll(".child");

sketch("BW");

function sketch(mode){
    console.log("entered sketch");
    if (mode==="BW"){
        console.log("entered bw");
        clearSketch();
        children.forEach((child) => {
            child.addEventListener("mouseover",function (e){
                e.target.style.backgroundColor = 'white'; 
            });
        });
    }
    else if(mode==="RANDOM"){
        console.log("entered random");
        clearSketch();
        children.forEach((child) => {
            child.addEventListener("mouseover",function (e){
                e.target.style.backgroundColor = randomColor(); 
            });
        });
    }
}

let reset = document.querySelector("#reset");
reset.addEventListener('click',reloadPage);

let clear = document.querySelector("#clear");
clear.addEventListener('click', clearSketch);

let bw = document.querySelector("#BW");
bw.addEventListener('click', bsketch);

let randomc = document.querySelector("#random");
randomc.addEventListener('click',rsketch);

function reloadPage(){
    location.reload();
}
function rsketch(){
    sketch("RANDOM");
}
function bsketch(){
    sketch("BW");
}

function clearSketch(){
    // console.log(children);
    children.forEach((child) => {
        child.style.backgroundColor = 'transparent';
});
}

function randomColor(){
let a = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let s = "#";
for(i=1;i<=6;i++){
    let b = Math.floor(Math.random()*16);
    s += a[b];
}
console.log(s);
return s;
}
