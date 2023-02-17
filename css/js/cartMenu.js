var cartProductDom = document.querySelector(".cartsProducts div");
var cartProductNum = document.querySelector("li .badge");
var shoppingCartIcon = document.querySelector("#userInfo i")
var cartProductMenu = document.querySelector("#userInfo .cartsProducts")

shoppingCartIcon.addEventListener("click",openCartMenu)

// check if there is items in localstorage
var addedItem = localStorage.getItem("productsInCarts") ? 
JSON.parse(localStorage.getItem("productsInCarts")) :[];


if(addedItem){
    addedItem.map(item =>{
    cartProductDom.innerHTML = `<p>${item.title} ${item.quantity}</p>`
    cartProductDom.innerHTML = "";
        addedItem.forEach( item =>{
        cartProductDom.innerHTML += `<p>${item.title} <span class="itemQuantity">${item.quantity}</span></p>`
        });
})
cartProductNum.style.display = "block"
cartProductNum.innerHTML = addedItem.length
}

function openCartMenu(e){
    e.preventDefault();
    if(cartProductDom.innerHTML != ""){
        if(cartProductMenu.style.display == "block"){
            cartProductMenu.style.display = "none";
        }
             else{
                cartProductMenu.style.display = "block"}
            }
}