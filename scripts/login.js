let userData = JSON.parse(localStorage.getItem("users")) || [];

let form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    
    if(checkUser(userData, emailInput, passwordInput)){
        alert("Signin succesfull")
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