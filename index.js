
gsap.to("#nav",{
    backgroundColor: "#333333",
    height: "70px",
    opacity: 0.8,
    duration: 0.5,
    scrollTrigger:{
        star: "top -10%",
        end: "top -11p%",
        scrub:1
    }
})


// Dark Animation for darkening the video and first section,

gsap.to("#main",{
    backgroundColor: "#E5DAC2",
    scrollTrigger:{
        trigger: "#main",
        scroll: "body",
        start: "top -30%",
        end: "top -60%",
        scrub: 2
    }
})

gsap.from("#page2, .offers, .offers img",{
    y: 100,
    opacity:0,
    duration: 0.5,
    scrollTrigger:{
        trigger: ".offers",
        scroll: "body",
        start: "top 700px",
        end: "top 500px",
        scrub: 3
    }
})

gsap.from(".about-us img, .about-us-text",{
    y: 50,
    opacity:0,
    duration: 2,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".about-us",
        scroll: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 3
    }
})




var FirstImage = document.querySelector('.image1')
var SecondImage = document.querySelector('.image2')
var ThirdImage = document.querySelector('.image3')
var FourthImage = document.querySelector('.image4')
var Images = document.getElementsByClassName('images')
var ItemPlace = document.getElementsByClassName('item')
var FirstItem = document.querySelector('.item1')
var SecondItem = document.querySelector('.item2')
var ThirdItem = document.querySelector('.item3')
var calculateButton = document.querySelector('button');
var sumDisplay = document.querySelector('p');

let NewUser = document.querySelector('.new-user-info')
let FirstPage = document.querySelector('.first-page')
let selected = null
let firstItemPopulated = false;
let secondItemPopulated = false;
let thirdItemPopulated = false;

const form = document.getElementById('form-one')
const UserEmail = document.getElementsByClassName('user-email')
const UserPassword = document.getElementsByClassName('user-pass')
const ErrorMsg = document.getElementById('error-msg')
const SignUpBtn = document.getElementById('sign-up-btn')
const BackBtn = document.querySelector('.backbtn')






//---------------------------CODE FOR CREATING MEAL BOX-----------------

for (image of Images){
    image.addEventListener('dragstart', (e)=>{
        console.log("started")
        selected = e.target
    })
}


// EVENTLISTENER FOR FIRST ITEM
    FirstItem.addEventListener('dragend', ()=>{
        console.log("ended")
     })

    FirstItem.addEventListener('dragover', (e)=>{
        e.preventDefault()
        console.log("over")
    })
    FirstItem.addEventListener('drop', (e)=>{
        e.preventDefault()
        if(!firstItemPopulated && selected !== null){
            const clone = selected.cloneNode(true); // Clone the selected image
             FirstItem.appendChild(clone);
             selected = null;
             firstItemPopulated = true
            console.log("ended")
        }
    })




// EVENTLISTENER FOR SECOND ITEM
    SecondItem.addEventListener('dragover', (e)=>{
        e.preventDefault()
        console.log("OVER")
    })
    SecondItem.addEventListener('dragend', ()=>{
        console.log("End")
    })
    SecondItem.addEventListener('drop', (e)=>{
        e.preventDefault()
        if(!secondItemPopulated && selected !== null){
            const clone = selected.cloneNode(true); // Clone the selected image
            SecondItem.appendChild(clone);
            selected = null;
            secondItemPopulated = true
            console.log("ended")
        }
    })    


// EVENTLISTENER FOR THIRD ITEM
    ThirdItem.addEventListener('dragover', (e)=>{
        e.preventDefault()
        console.log("OVER")
    })
    ThirdItem.addEventListener('dragend', ()=>{
        console.log("End")
    })
    ThirdItem.addEventListener('drop', (e)=>{
        e.preventDefault()
        if(!thirdItemPopulated && selected !== null){
            const clone = selected.cloneNode(true); // Clone the selected image
            ThirdItem.appendChild(clone);
            selected = null;
            thirdItemPopulated = true
            console.log("ended")
        }
    })




    calculateButton.addEventListener('click', () => {
        let sum = 0;
        let finalSum = 0
        const rightDivs = document.querySelectorAll('.item');
        rightDivs.forEach((div) => {
            const image = div.querySelector('.images');
            if (image) {
                const value = parseInt(image.getAttribute('data-value'));
                sum += value
                finalSum = Math.floor(sum - (sum * 4.5/100))
            }
        });
        sumDisplay.textContent = `Your Total: Rs ${finalSum}/-`;
    });
//----------------------------------------------------------------------

//------------------CODE FOR LOGIN VALIDATIONS!-------------------------

form.addEventListener('submit', function (e){
    let message = []
    if(UserPassword.value.length <= 6){
        console.log("done")
        message.push("password must be more than 6 character long.")
    }
    if(message.length > 0){
        e.preventDefault()
        ErrorMsg.textContent = message
    }
})

function signUp(){
    console.log("clicked")
    FirstPage.style.display = "none"
    NewUser.style.display = "block"
}

function backbtn(){
    console.log("clicked")
    FirstPage.style.display = "block"
    NewUser.style.display = "none"
}
//----------------------------------------------------------------------


//                  CODE FOR HAMBURGER MENU!
const hamburger = document.querySelector('.hamburger')
        const Links = document.querySelector('.links')
    
        hamburger.addEventListener('click', () =>{
            hamburger.classList.toggle("active-menu")
            Links.classList.toggle("active-menu")
        })

