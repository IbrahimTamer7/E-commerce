//LANGUAGES
var enLang = document.getElementById("enLang");
var arLang = document.getElementById("arLang");

enLang.addEventListener("click" , () => changeDir ("ltr"))
arLang.addEventListener("click" , () => changeDir ("rtl"))

function changeDir(dir){
    document.documentElement.setAttribute("dir",dir)
    localStorage.setItem("langDir",dir)
}

var getLang = localStorage.getItem("langDir")
if(getLang){
    if(getLang == "ltr"){changeDir("ltr")}
    else{changeDir("rtl")}
}