var productsDom = document.getElementById("products");
var noProductsDom = document.querySelector(".noProducts")


var drawProductsUI;
(drawProductsUI = function(products =[]){
    var myProducts = products.filter((item) => item.isMe === "yes") 
    if(myProducts.length !== 0){
        var productsUI = myProducts.map((item) => {
            return `
            <div class="productItem" style="border:${item.isMe === 'yes'? "3px solid green" : ""}">
            <img class="productItemImg"
            src="${item.imageUrl}"
            alt="image">
    
            <div class="productItemDesc">
                <a onclick="saveItemData(${item.id})">${item.title}</a>
                <p>${item.desc}</p>
                <span>Size : ${item.size}</span>
               <button class='editProduct' onclick='editProduct(${item.id})'> Edit Product</button><br>
               <button class='editProduct' onclick='deleteProduct(${item.id})'> Delete Product</button>
            </div>
    
            <div class="productItemActions">
                <button class="addToCart" onclick="addedToCart(${item.id})">Add To Cart</button>
                <i class="favorite fa-regular fa-heart" style="color: ${item.liked === true ? "red" :""}" onclick="addedToFavourite(${item.id})"></i>
            </div>
    
        </div>
            `;
        });
    
        productsDom.innerHTML = productsUI.join("") ;
    }
    else{
        noProductsDom.innerHTML = ("No Products created")
    }
})(JSON.parse(localStorage.getItem("products")) || products);

//edit product
function editProduct(id){
    localStorage.setItem("editProduct" , id);
    window.location="editProduct.html"
}

function deleteProduct(id){
    var products = JSON.parse(localStorage.getItem("products")) || products;
    var myProducts = products.filter((item) => item.isMe === "yes");
    var filtered = myProducts.filter((i) => i.id !== id);
    var clickedItem = myProducts.find((i) => i.id === id );
    products = products.filter((i) => i.id !== clickedItem.id );
    localStorage.setItem("products" , JSON.stringify(products));
    drawProductsUI(filtered)
}