let Button1 = document.getElementById("button1")
let but1 = document.querySelector(".but1")
let Desp1 = document.getElementById("Desp1")
let depart1 = document.querySelector(".desp1")
let Ques1 = document.querySelector(".bold1")
//let hid = document.querySelectorAll(".hid")

Button1.addEventListener("click", () => {

    but1.classList.toggle("butRot")
    depart1.classList.toggle("hidden1")
    Ques1.classList.toggle("hid")
})

let Button2 = document.getElementById("button2")
let desp2 = document.querySelector(".desp2")
let Ques2 = document.querySelector(".bold2")


Button2.addEventListener("click", ()=> {
    desp2.classList.toggle("hidden2")
    Button2.classList.toggle("butRot")
    Ques2.classList.toggle("hid")
    
})
let Button3 = document.getElementById("button3")
let desp3 = document.querySelector(".desp3")
let Ques3 =document.querySelector(".bold3")
Button3.addEventListener("click", ()=> {
    desp3.classList.toggle("hidden3")
    Button3.classList.toggle("butRot")
    Ques3.classList.toggle("hid")
})

let Button4 = document.getElementById("button4")
let desp4 = document.querySelector(".desp4")
let Ques4 = document.querySelector(".bold4")
Button4.addEventListener("click", ()=> {
    desp4.classList.toggle("hidden4")
    Button4.classList.toggle("butRot")
    Ques4.classList.toggle("hid")
})

let Button5 = document.getElementById("button5")
let desp5 = document.querySelector(".desp5")
let Ques5 = document.querySelector(".bold5")
Button5.addEventListener("click", ()=>{
    Button5.classList.toggle("butRot")
    desp5.classList.toggle("hidden5")
    Ques5.classList.toggle("hid")
})

// document.getElementById(Desp1).style.display = "block";