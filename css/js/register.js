var userName = document.getElementById("userName");
var email = document.getElementById("e-mail");
var password = document.getElementById("password");
var signUp = document.getElementById("signUp");

signUp.addEventListener("click", register)

function register(e){
    e.preventDefault();
        if( userName.value === "" || password.value === "" || email.value === ""){alert("fill all fields")
        }
        else{
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("password" , password.value);
        localStorage.setItem("email" , email.value);
        
        }
        setTimeout(() => {
            window.location = "login.html";
        }, 1500);
}