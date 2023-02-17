//define products
var productsDom = document.getElementById("products");
var products = JSON.parse(localStorage.getItem("products"));

// display products
var drawProductsUI;
(drawProductsUI = function(products =[]){
    var productsUI = products.map((item) => {
        return `
        <div class="productItem" style="border:${item.isMe === 'yes'? "3px solid green" : ""}">
        <img class="productItemImg"
        src="${item.imageUrl}"
        alt="image">

        <div class="productItemDesc">
            <a onclick="saveItemData(${item.id})">${item.title}</a>
            <p>${item.desc}</p>
            <span>Size : ${item.size}</span>
            ${item.isMe === "yes" && "<button class='editProduct' onclick='editProduct("+item.id+")'> Edit Product</button>"}
        </div>

        <div class="productItemActions">
            <button class="addToCart" onclick="addedToCart(${item.id})">Add To Cart</button>
            <div class="favIcon"><i class="favorite fa-regular fa-heart" style="color: ${item.liked === true ? "red" :"" }" onclick="addedToFavourite(${item.id})"></i></div>
        </div>

    </div>
        `;
    });

    productsDom.innerHTML = productsUI.join("") ;
})(JSON.parse(localStorage.getItem("products")) || products);



// add to cart
function addedToCart(id){
    if(localStorage.getItem("userName")){
        var product = products.find((item) =>  item.id === id );
        var isProductInCart = addedItem.some((i) => i.id === product.id)

        if(isProductInCart){
        addedItem = addedItem.map(p =>{
            if(p.id === product.id)p.quantity +=1;
            return p;
        })   
        }  else{
            addedItem.push(product)
        }
        //UI
        cartProductDom.innerHTML = "";
        addedItem.forEach( item =>{
        cartProductDom.innerHTML += `<p>${item.title} <span class="itemQuantity">${item.quantity}</span></p>`
        });


        //save data
        localStorage.setItem("productsInCarts" , JSON.stringify(addedItem))

        //add counter of items
        var cartProductItems = document.querySelectorAll(".cartsProducts div p");
        cartProductNum.style.display = "block"
        cartProductNum.innerHTML = cartProductItems.length;
        }
        else{
        window.location = ("login.html")
        }
}

function getUniqueArr(arr , filterType){
    var unique = arr
    .map((item) => item[filterType])
    .map((item , i , final)=>final.indexOf(item) === i && i)
    .filter((item)=>arr[item])
    .map((item)=>arr[item])
    return unique;
}

//item show
function saveItemData(id){
localStorage.setItem("productId", id);
window.location = ("cartDetails.html");
}

//search 

var input = document.getElementById("search")
input.addEventListener("keyup",function(e){
     
    search(e.target.value,JSON.parse(localStorage.getItem("products")))

if(e.target.value.trim() === "")
{
    drawProductsUI(JSON.parse(localStorage.getItem('products')))
}
});

function search( title, myArray){
    // for (var i = 0; i < myArray.length; i++){
    // if(myArray[i].title === title)
    // {console.log(myArray[i]);}}
    var arr = myArray.filter(item => item.title.toLowerCase().toUpperCase().indexOf(title.toLowerCase().toUpperCase()) !==  -1);
    drawProductsUI(arr);
}

// Add to favourite

var favouriteItems = localStorage.getItem("productFavourite") ? 
JSON.parse(localStorage.getItem("productFavourite")) :[];

function addedToFavourite(id){
    if(localStorage.getItem("userName")){
        var choosenItem = products.find((item) =>  item.id === id );
        choosenItem.liked = true;
        favouriteItems = [...favouriteItems , choosenItem];
        var uniqueProducts = getUniqueArr(favouriteItems , "id");
        localStorage.setItem("productFavourite" , JSON.stringify(uniqueProducts))
        products.map(item =>{
            if(item.id === choosenItem.id){
            item.liked = true;
        }} )
        localStorage.setItem("products" , JSON.stringify(products))
        drawProductsUI(products);
        }   else{
        window.location = ("Register.html")
        }
}

//filter products by size
var sizeFilter = document.getElementById("sizeFilter");

sizeFilter.addEventListener("change",getProductsFilterBySize)

function getProductsFilterBySize(e){
    var val = e.target.value;
    var products = JSON.parse(localStorage.getItem("products")) || products ;

    if (val === "all")
    {
        drawProductsUI(products);
    }
    else {
        products = products.filter((item)=> item.size === val);
        drawProductsUI(products)};
}

//edit Product
function editProduct(id){
    localStorage.setItem("editProduct" , id);
    window.location="editProduct.html"
}

var favIcon = document.querySelector(".favIcon")
function removeFavColor(id){
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
        drawProductsUI(allProduct);}
}
favIcon.addEventListener("click", removeFavColor())