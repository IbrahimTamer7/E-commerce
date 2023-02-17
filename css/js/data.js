var products = [
    {
        id : 1,
        title : "HeadPhone",
        size : "large",
        desc : "lorem jsauyk hahahsi jash ksdhiw lkxzmlkg oipocmnxcnb",
        imageUrl : "images/h2232d-rgb-gaming-headset__07862.1558418642.jpg",
        quantity : 1,
        isMe : "no"
    } ,
    {
        id : 2,
        title : "LapTop",
        desc : "lorem jsauyk hahahsi jash ksdhiw lkxzmlkg oipocmnxcnb",
        size : "large",
        imageUrl : "images/71RK6+rx-xL._AC_SL1500_.jpg",
        quantity : 1,
        isMe : "no"
    } ,
    {
        id : 3,
        title : "Watch",
        desc : "lorem jsauyk hahahsi jash ksdhiw lkxzmlkg oipocmnxcnb",
        size : "small",
        imageUrl : "images/google-pixel-watch-charcoal-device-3qt-left.png",
        quantity : 1,
        isMe : "no"
    } ,
    {
        id : 4,
        title : "Glasses",
        desc : "lorem jsauyk hahahsi jash ksdhiw lkxzmlkg oipocmnxcnb",
        size : "small",
        imageUrl : "images/1.jpg",
        quantity : 1,
        isMe : "no"
    } 
];
if(!('products' in localStorage)){
    localStorage.setItem("products",JSON.stringify(products));
}
// if(localStorage.getItem("products") === ""){
//     localStorage.setItem("products",JSON.stringify(products));
// }
