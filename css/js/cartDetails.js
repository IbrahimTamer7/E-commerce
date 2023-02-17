var products = JSON.parse(localStorage.getItem("products"));
var productId = JSON.parse(localStorage.getItem("productId")) 
var itemDom = document.querySelector(".itemDetails")
var productDetailItem = products.find(item => item.id === productId )


itemDom.innerHTML = `<img src="${productDetailItem.imageUrl}" alt="">
<h2>Title : ${productDetailItem.title}</h2>
<span>Size : ${productDetailItem.size}</span> <br>
<span>Quantity : ${productDetailItem.quantity}</span>
<button class='editProduct' onclick="editProduct(${productId})"> Edit Product </button> 
`;
function editProduct(id){
    localStorage.setItem("editProduct" , id);
    window.location="editProduct.html"
}