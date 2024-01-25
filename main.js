let cloths = document.getElementById("cloths");
let review = document.getElementById("review");
let contacts = document.getElementById("contact");
let blogs = document.getElementById("blogs");

coloths.addEventListener("click",function(){
    cloths.style.color="red";
    review.style.color="white";
    contacts.style.color="white";
    blogs.style.color="white";
})
review.addEventListener("click",function(){
    cloths.style.color="block";
    review.style.color="red";
    contacts.style.color="block";
    blogs.style.color="block";
})
blogs.addEventListener("click",function(){
    cloths.style.color="red";
    review.style.color="block";
    contacts.style.color="block";
    blogs.style.color="block";
})
contacts.addEventListener("click",function(){
    cloths.style.color="red";
    review.style.color="block";
    contacts.style.color="block";
    blogs.style.color="block";
})

let login = document.getElementById("login");
login.addEventListener("click", function(){
    document.querySelector("loginpag").style.display="block"
})

let loged = document.getElementById("loged");

loged.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = ducument.getElementById("pass");

    if(email.valu == "" /pass.value == ""){
        alert("please Enter Email Password")
    }else{
        alert("You Loged In")
        document.querySelector("loginpage").style.display="none";
    }

})
let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    let name = document.getElementById("name");
    let pass = ducument.getElementById("pass");

    if(email.valu == "" /pass.value == ""){
        alert("please Enter nam and Password")
    }else{
        alert(name.value +"Thanks For Connecting")
        document.querySelector("loginpage").style.display="none";
    }
})