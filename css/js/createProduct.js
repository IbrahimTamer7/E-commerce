var productName = document.getElementById("productName");
var productDesc = document.getElementById("productDesc");
var productSizeSelect = document.getElementById("productSize");
var createForm = document.getElementById("createProductForm");
var inputFile = document.getElementById("uploudImageFile")
var productSizeValue ;
var productImage;

//Events
productSizeSelect.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit" , createProductFun);
inputFile.addEventListener("change" , uploudImage)

//Functions
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

function createProductFun(e){
    e.preventDefault();
    var allproducts = JSON.parse(localStorage.getItem("products")) ;
    var nameValue = productName.value;
    var descValue = productDesc.value;
    var newProducts = [];
    if(nameValue && descValue ){
        var obj = {
            id : allproducts ? allproducts.length + 1 : 1,
            quantity : 1,
            imageUrl : productImage,
            size : productSizeValue,
            title : nameValue,
            desc : descValue,
            isMe : "yes",
    }; 

    newProducts.push(...allproducts);
    newProducts.push(obj);
    localStorage.setItem("products", JSON.stringify(newProducts));
    productName.value="";
    productDesc.value="";
    productSizeSelect.value="";
    setTimeout(() => {
        window.location = "index.html";
    }, 500);
}
else{
    alert("Enter Data")
}
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
