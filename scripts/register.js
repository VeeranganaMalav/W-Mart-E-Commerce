let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let form = document.querySelector("main form");

let userInfo = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function(e){
    window.location.href = "http://127.0.0.1:5500/pages/home.html";
    e.preventDefault();
    let userObj = {
        name : nameInput.value,
        email : emailInput.value,
        password : passwordInput.value
    }
    let cartObj = {};

    userInfo.push({user : userObj, cart : cartObj});
    // userData.push(cartObj);
    // console.log(userData);
    localStorage.setItem("users", JSON.stringify(userInfo));
})