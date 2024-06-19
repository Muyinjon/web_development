/**MUYINJON TUROBOV
 * MONDAY JUNE 17: EVENT IN JS
 * 
 */

//onlick event

// step 1: find and save the elements that we want to apply event

let btn1 = document.querySelector(".btn1")
// step 2: bound the click to btn1
btn1.onclick = function(){alert("Heyyyy there?!?!?!&å")}

document.querySelector(".link1").onmouseover = ()=>{alert("No touching")}

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

// tuesday, june 18
// event object in key events
// collect the button
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click",function(e){
    if(e.target.textContent == "touch me"){
        e.target.textContent = "dont touch again"}
        else{e.target.textContent = "touch me"}
        e.target.classList.toggle("btnactive")
}
)



///prevent default of an event 
let listitem = document.querySelector("#listitem")
listitem.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase()==="li"){event.target.remove()}
})

let vistgoogle = document.querySelector(".vistgoogle")
vistgoogle.addEventListener("click",function(event){
    event.preventDefault()
    alert("Google is not working!!!")

})

//scroll event
let content = document.querySelector("#content")
let scrollbtn = document.querySelector(".scrollbtn")
scrollbtn.addEventListener("click",function(){
    window.scrollBy(100,0)})

// slice photo gallary

let btnleft = document.querySelector(".btnleft")
let btnright =document.querySelector(".btnright")
let gallarycontainer = document.querySelector(".gallarycontainer")

btnleft.addEventListener("click",function(){
    gallarycontainer.scrollBy({top:0, left: -500, behavior: 'smooth'}) // left = -500.
})

btnright.addEventListener("click",function(){
    gallarycontainer.scrollBy({top:0, left: 500, behavior: 'smooth'}) // right = -500.
})



const gotop = document.querySelector(".gotop")

window.addEventListener("scroll",function(){
    let pxtop = window.scrollY;
    console.log(pxtop)
    if(pxtop >= 500){
        gotop.style.display = "block"
    }
    else{
        gotop.style.display = "none"
    }
})
