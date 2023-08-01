const form = document.getElementById('form-one')
const UserEmail = document.getElementsByClassName('user-email')
const UserPassword = document.getElementsByClassName('user-pass')
const ErrorMsg = document.getElementById('error-msg')
const SignUpBtn = document.getElementById('sign-up-btn')
let NewUser = document.querySelector('.new-user-info')
let FirstPage = document.querySelector('.first-page')
const BackBtn = document.querySelector('.backbtn')



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

SignUpBtn.addEventListener('click', function(){
    console.log("clicked")
    FirstPage.style.display = "none"
    NewUser.style.display = "block"
})

BackBtn.addEventListener('click', function(){
    console.log("clicked")
    FirstPage.style.display = "block"
    NewUser.style.display = "none"
})

const hamburger = document.querySelector('.hamburger')
        const Links = document.querySelector('.links')
    
        hamburger.addEventListener('click', () =>{
            hamburger.classList.toggle("active-menu")
            Links.classList.toggle("active-menu")
        })


