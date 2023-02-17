//get data from storage
var getUser = localStorage.getItem("userName")
var getEmail = localStorage.getItem("email")

//variables
var userInput = document.getElementById("changeName")
var userEmailInput = document.getElementById("changeEmail")
var editForm = document.getElementById("editProfileForm")

//setting values to input
userInput.value = getUser;
userEmailInput.value = getEmail;

//events
editForm.addEventListener("submit", editProfileData);

function editProfileData(e){
e.preventDefault();

localStorage.setItem("userName" , userInput.value);
localStorage.setItem("email" , userEmailInput.value);
localStorage.setItem("userImage" , userInput.value);

setTimeout(() => {
    window.location = "profile.html"
}, 500);
}





