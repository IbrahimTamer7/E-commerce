var productsDom = document.getElementById("products");
var noProductsDom = document.querySelector(".noProducts")

function drawCartProductsUI( allproducts = []){
    if(JSON.parse(localStorage.getItem("productsInCarts")).length ===0){
        noProductsDom.innerHTML = ("No items found")
    }
    var products =JSON.parse(localStorage.getItem("productsInCarts")) || allproducts
    var productsUI = products.map((item) => {
        return `
        <div class="productItem">
        <img class="productItemImg"
        src="${item.imageUrl}"
        alt="image">

        <div class="productItemDesc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span>Size : ${item.size}</span> <br>
            <span>Quantity : ${item.quantity}</span>

        </div>

        <div class="productItemActions">
            <button class="addToCart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
            <i class="favorite fa-regular fa-heart"></i>
        </div>

    </div>
        `;
    });

    productsDom.innerHTML = productsUI.join("");
}
drawCartProductsUI();

function removeItemFromCart(id){
    var productsInCart = localStorage.getItem("productsInCarts")
        if(productsInCart){
        var items = JSON.parse(productsInCart) ;
        var filteredItems = items.filter((item) =>item.id !== id);
        localStorage.setItem("productsInCarts" , JSON.stringify(filteredItems))
        }
        drawCartProductsUI(filteredItems);
}