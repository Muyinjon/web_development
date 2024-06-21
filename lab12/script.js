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

//Thursday, June 20

// form event
//input event

const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetingname = document.querySelector(".greeting p span")

myform.addEventListener("submit",function(event){
    //prevent the deafault form submission behaviour
    event.preventDefault()
    //start the form validation
    const usernameinput = document.querySelector("#username")
    //collect the value
    const username = usernameinput.value
     //validation 1: make sure the user types a user before pressing the submit button
     if(username === ""){
        alert("Please type a username")
        return;
    }

    //if the validation is successful, you can sumbit the data to the server
    greetingname.innerHTML = username
    greeting.style.display = "block"

    //after the form is submitted, we want to clear the input field
    usernameinput.value = ""})

    //password validation
    //collect form elements
    const passwordfield = document.querySelector("#passwordfield")
    const sumbitbtn = document.querySelector(".sumbitbtn")
    //collect the password error message element
    const passworderror = document.querySelector(".passworderror")
    const passwordmsg = document.querySelector(".passwordmsg")
    
    //disable the submit button
    window.addEventListener("load",function(){
        sumbitbtn.disabled = true
        sumbitbtn.style.backgroundColor = "gray"
    })

    //check the length of the password
    passwordfield.addEventListener("input",function(){
        let numberofchar = passwordfield.value.length
        if(numberofchar<8){
           passworderror.textContent = "Invalid password, must have at least 8 characters"
           passworderror.style.color = "red"
           passwordfield.style.borderColor = "solid 2px red"}
           else{
            passworderror.innerHTML = "&#x2713"
            passworderror.style.color = "green"
            passwordfield.style.border = "solid 2px green"
            sumbitbtn.disabled = false
            sumbitbtn.style.backgroundColor = "red"

           }
})

const comments = document.querySelector("#comments")
const commentserror = document.querySelector(".commentserror")
const commentlength = document.querySelector(".commentlength")
const sumbitcomment = document.querySelector(".sumbitcomment")


comments.addEventListener("input",function(){
    let numbercomofchar = comments.value.length
    let leftchar = document.querySelector(".leftchar")
    let ssumbit = document.querySelector(".ssumbit")
    if(numbercomofchar>50){
        commentserror.style.color = "green"
        comments.style.border = "solid 2px green"
        sumbitcomment.disabled = false
        sumbitcomment.style.backgroundColor = "green"
        commentserror.style.display = "None"
        ssumbit.innerHTML = "Submit"

    }
    else{
        commentserror.innerHTML = "Invalid comment, must have at least 50 characters"
        commentserror.style.color = "red"
        comments.style.border = "solid 2px red"
        ssumbit.innerHTML = "Cannot Submit"
        sumbitcomment.disabled = true
        sumbitcomment.style.backgroundColor = "red"
        commentserror.style.display = "block"

    }
    if(numbercomofchar>=2000){commentlength.innerHTML = "You have reached the limit"}
    else {commentlength.innerHTML = "Characters left: " + (2000-numbercomofchar)}
})
