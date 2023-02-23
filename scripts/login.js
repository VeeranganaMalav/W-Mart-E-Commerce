let userData = JSON.parse(localStorage.getItem("users")) || [];

let form = document.querySelector("main form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    
    if(checkUser(userData, emailInput, passwordInput)){
        window.location.href = "http://127.0.0.1:5500/pages/home.html";
    }
    else{
        alert("Wrong credentials")
    }
});

function checkUser(userData, emailInput, passwordInput){
    for(let i=0; i<userData.length; i++){
        if((userData[i].email === emailInput) && (userData[i].password === passwordInput)){
            return true;
        }
    }
    return false;
};