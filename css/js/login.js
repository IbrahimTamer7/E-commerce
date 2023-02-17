var userName = document.getElementById("UserName");
var password = document.getElementById("password");
var login = document.getElementById("login");

var getUser = localStorage.getItem("userName");
var getPassword = localStorage.getItem("password");


login.addEventListener("click", function(e)
{
    e.preventDefault();
    if( userName.value === "" || password.value === ""){alert("fill all fields");}
        else{
            if(( getUser && getUser.trim() === userName.value.trim()) && ( getPassword && getPassword.trim() === password.value.trim()))
            {
                setTimeout(() => {
                    window.location = "index.html";
                }, 1500);
            }
            else
            {
                alert("userName or Password is wrong")
            }
        }
})