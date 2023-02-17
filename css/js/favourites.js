var productsDom = document.getElementById("products");
var noProductsDom = document.querySelector(".noProducts")

function drawFavouritesProductsUI( allproducts = []){
    if(JSON.parse(localStorage.getItem("productFavourite")).length ===0){
        noProductsDom.innerHTML = ("No items found")
    }
    var products =JSON.parse(localStorage.getItem("productFavourite")) || allproducts
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
            <button class="addToCart" onclick="removeItemFromCart(${item.id})">Remove From Favourite</button>
        </div>

    </div>
        `;
    });

    productsDom.innerHTML = productsUI.join("");
}
drawFavouritesProductsUI();

function removeItemFromCart(id){
    var productsFavourite = localStorage.getItem("productFavourite")
        if(productsFavourite){
        var items = JSON.parse(productsFavourite);
        var filteredItems = items.filter((item) => item.id !== Number(id));
        var allProduct = JSON.parse(localStorage.getItem("products"))     
        allProduct.map((item) => {
            if(item.id === Number(id)){
                item.liked = false;
            }
        })  
        localStorage.setItem("products", JSON.stringify(allProduct))
        localStorage.setItem("productFavourite" , JSON.stringify(filteredItems));
        drawFavouritesProductsUI(filteredItems);
 }}