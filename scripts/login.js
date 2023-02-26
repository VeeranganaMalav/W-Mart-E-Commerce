let userInfo = JSON.parse(localStorage.getItem("users")) || [];
let form = document.getElementById("login-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    userInfo.forEach((userData) => {
        if(checkUser(userData.user, emailInput, passwordInput)){
            if(emailInput == "admin@ad.com"){
                if(passwordInput == "admin"){
                    window.location.href = "http://127.0.0.1:5500/pages/admin.html";
                }
            }
            else{
                window.location.href = "http://127.0.0.1:5500/pages/home.html";
            }
        }
    })
});

function checkUser(user, emailInput, passwordInput){
    if(user.email == emailInput){
        if(user.password == passwordInput){
            return true;
        }
    }
    return false;
};