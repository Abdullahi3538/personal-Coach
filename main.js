// menu 

const ul=document.getElementById("ul")
const btnM=document.getElementById("btnM")
const btnx=document.getElementById("btnX")


btnM.addEventListener("click",()=>{
    ul.style.display="flex"
    btnx.style.display="flex"
    btnM.style.display="None"
})
btnx.addEventListener("click",()=>{
    ul.style.display="none"
    btnx.style.display="none"
    btnM.style.display="flex"
})

// Services js
const home=document.getElementById("home")
const Home=document.getElementById("Home")
const about=document.getElementById("About")
const About=document.getElementById("about")
const Contact=document.getElementById("Contact")
const help=document.getElementById("help")
const Services3=document.getElementById("Services3")
const Services=document.getElementById("Services")
const Services1=document.getElementById("Services1")

Services1.style.display="none"

Services.addEventListener("click",()=>{
    home.style.display="none"
    About.style.display="none"
    about.style.display="flex"
    help.style.display="none"
    Services1.style.display="flex"
    plans.style.display="none"
})
Services3.addEventListener("click",()=>{
    home.style.display="none"
    about.style.display="flex"
    About.style.display="none"
    help.style.display="none"
    Services1.style.display="flex"
    plans.style.display="none"
})


Home.addEventListener("click",()=>{
    home.style.display="block"
    about.style.display="flex"
    About.style.display="flex"
    help.style.display="block"
    Services1.style.display="none"
    plans.style.display="none"
    

})
about.addEventListener("click",()=>{
    home.style.display="block"
    About.style.display="flex"
    help.style.display="block"
    Services1.style.display="none"
    plans.style.display="none"
    

})
Contact.addEventListener("click",()=>{
    home.style.display="block"
    About.style.display="flex"
    help.style.display="block"
    Contact.style.display="block"
    Services1.style.display="none"
    plans.style.display="none"

})



// Servies inside js


const All=document.getElementById("All")
const Personal=document.getElementById("personal")
const Boxes=document.getElementById("Boxes")
const Personal_Box=document.getElementById("Personal_Box")
const Career_Box=document.getElementById("Career_Box")
const Creer=document.getElementById("Creer")
Personal_Box.style.display="none"
Career_Box.style.display="none"

Personal.addEventListener("click",()=>{
    Boxes.style.display="none"
    Personal_Box.style.display="block"
    Career_Box.style.display="none"
})

All.addEventListener("click",()=>{
    Personal_Box.style.display="none"
    Boxes.style.display="block"
    Career_Box.style.display="none"
})
Creer.addEventListener("click",()=>{
     Personal_Box.style.display="none"
     Boxes.style.display="none"
     Career_Box.style.display="Block"

})

// palnsssssss

const plan=document.getElementById("Plan")
const plans=document.getElementById("Plans")
plans.style.display="none"

plan.addEventListener("click",()=>{
    plans.style.display="block"
    home.style.display="none"
    About.style.display="none"
    help.style.display="none"
    Services1.style.display="none"

})

// form

const btn_input=document.getElementById("btn_input")
const First_name=document.getElementById("First_name")
const Last_name=document.getElementById("Last_name")
const Email=document.getElementById("Email")
// spans

const span1=document.getElementById("span1")
const span2=document.getElementById("span2")
const span3=document.getElementById("span3")

span1.style.display="none"
span2.style.display="none"
span3.style.display="none"

btn_input.addEventListener("click",(event)=>{
    event.preventDefault()

    if(First_name.value==="" || Last_name.value==="" || Email.value===""){
        span1.style.display="flex"
        span2.style.display="flex"
        span3.style.display="flex"
    }
})




