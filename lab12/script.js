/**MUYINJON TUROBOV
 * MONDAY JUNE 17: EVENT IN JS
 * 
 */

//onlick event

// step 1: find and save the elements that we want to apply event

let btn1 = document.querySelector(".btn1")
// step 2: bound the click to btn1
btn1.onclick = function(){alert("Heyyyy there?!?!?!&å")}

document.querySelector(".link1").onmouseout = ()=>{alert("No touching")}

// change color div

let colorcontainer = document.querySelector(".colorcontainer")
let btncolor = document.querySelector(".btncolor")

btncolor.addEventListener("click",function(){
    colorcontainer.style.backgroundColor = randomcolor()})

let randomcolor = function(){
    let randomR = Math.floor(Math.random()*255)
    let randomG = Math.floor(Math.random()*255)
    let randomB = Math.floor(Math.random()*255)
return `rgb(${randomR},${randomG},${randomB})`}


//change background to olive
let bnt2 = document.querySelector(".btn2")
let bnt3 = document.querySelector(".btn3")
bnt2.addEventListener("click",function(){
    colorcontainer.style.backgroundColor = "olive"
})
bnt3.addEventListener("click",function(){
    colorcontainer.style.backgroundColor = "orange"
})

//reset button

let resetbtn = document.querySelector(".resetbtn")
resetbtn.addEventListener("click",function(){
    colorcontainer.style.backgroundColor = "white"
})
