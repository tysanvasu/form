const container = document.querySelector(".container");
const show = document.querySelectorAll(".show");
const pass = document.querySelectorAll(".pass");

const sign = document.querySelector(".sign");
console.log(sign);
const login = document.querySelector(".login");
console.log(login);

show.forEach((eye)=>{
    eye.addEventListener("click",()=>{
       pass.forEach((val)=>{
        if(val.type === "password"){
            val.type = "text";
        }
        else{
            val.type = "password"
        }
       })
    })
})