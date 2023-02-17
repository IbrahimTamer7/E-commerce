var products = JSON.parse(localStorage.getItem("products")) || products;
var productId = JSON.parse(localStorage.getItem("editProduct"));
var getProduct = products.find((item) => item.id === productId);
console.log("before update" , getProduct)
var productName = document.getElementById("productName");
var productDesc = document.getElementById("productDesc");
var productSizeSelect = document.getElementById("productSize");
var updateForm = document.getElementById("updateProductForm");
var inputFile = document.getElementById("uploudImageFile")
var productSizeValue ;
var productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage = getProduct.imageUrl;


// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit" , updateProductFun);
inputFile.addEventListener("change" , uploudImage)

//Functions
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

function updateProductFun(e){
    e.preventDefault();

    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.imageUrl = productImage;
    getProduct.size = productSizeValue;
    console.log("after update" , getProduct)

    localStorage.setItem("products", JSON.stringify(products));
    setTimeout(() => {
        window.location("index.html")
    }, 1000);

}

function uploudImage(){
    var file = this.files[0]
    var types = ["image/png" , "image/jpeg"];

    if(types.indexOf(file.type) == -1){
        alert("png or jpeg type only")
        return;
    }
    // productImage = URL.createObjectURL(file)
    getImageBase64(file);
}

function getImageBase64(file){
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        productImage = reader.result
    };
    reader.onerror= function(){
        alert("error")
    }
};
