let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    let userObj = {
        name : nameInput.value,
        email : emailInput.value,
        password : passwordInput.value
    }

    userData.push(userObj);
    console.log(userObj);
    localStorage.setItem("users", JSON.stringify(userData));
})