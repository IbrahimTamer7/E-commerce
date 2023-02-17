//get data from storage
var getUser = localStorage.getItem("userName")
var getEmail = localStorage.getItem("email")
var products = JSON.parse(localStorage.getItem("products"));
var myProducts = products.filter((i)=> i.isMe === "yes" );

//variables
var userDom2 = document.getElementById("userName")
var userEmailDom = document.getElementById("email")
var productsLength = document.querySelector("#productsLength span")

userDom2.innerHTML = getUser;
userEmailDom.innerHTML = getEmail;

if(myProducts.length != 0){
    productsLength.innerHTML = myProducts.length;
}
else{
    productsLength.remove()
}


