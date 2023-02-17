var userInfo = document.getElementById("userInfo");
var userDom = document.getElementById("user");
var links = document.getElementById("links");
var userName = localStorage.getItem("userName");
var logOut = document.getElementById("logout");

if(userName)
{
    links.remove()
    userInfo.style.display = "flex"
    userDom.innerHTML = `Welcome ${userName}`;
}

logOut.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1500);
});