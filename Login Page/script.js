const container=document.getElementById('container')
const registerBtn=document.getElementById('register')
const loginBtn=document.getElementById('Login')

registerBtn.addEventListener('click',()=>{
    container.classList.add("active")
})
loginBtn.addEventListener('click',()=>{
    container.classList.remove("active")
})














// ONLY ANIMATION JS

const between=document.getElementById("between")
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")

btn1.addEventListener('click',()=>{
    between.classList.add("active")
})
btn2.addEventListener('click',()=>{
    between.classList.remove("active")
})