
var cartData = [
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518253-Revolution-Relove--Baby-Tint-Coral--Lip---Cheek-Tint_2-1080x1080-5b3e89b6-be83-423b-9264-18c5a2fe396a_1024x1024.jpg?v=1637413249",
        name : "Revolution Relove",
        desc : "relution Revolution Relution Relove Bavy Tint Coral Lip & Cheek Tint",
        deletPrice : " 499",
        price : " 324"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518246--Revolution-Relove--Gloss-Up-Eye-Gloss_2-1080x1080-8c994c46-0ee8-4bcf-af81-b33148e56ea3_1024x1024.jpg?v=1637412657",
        name : "Revolution Relove",
        desc : "Revolution Relution Relove Bavy Tint Coral Lip & Cheek Tint",
        deletPrice : " 499",
        price : " 324"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518239--Revolution-Relove--Prime-Up--Perfecting-Eye-Prime_2-1080x1080-946eb39a-a31d-4c06-9149-4a28765f74cb_1024x1024.jpg?v=1637411865",
        name : "Revolution Relove",
        desc : "Revolution Relution Relove Bavy Tint Coral Lip & Cheek Tint",
        deletPrice : " 499",
        price : " 324"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518185-Relove-EyeLight-Shine-MetallicEyeshadows-1-1080x1080-6cab39b6-5ce2-4161-a583-517d23a5195c_1024x1024.jpg?v=1637409282",
        name : "Revolution Relove",
        desc : "Revolution Relution Relove Bavy Tint Coral Lip & Cheek Tint",
        deletPrice : " 499",
        price : " 324"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/RelovebyRevolutionLipliner_1024x1024.jpg?v=1637405589",
        name : "Revolution Relove",
        desc : "Revolution Relution Relove Bavy Tint Coral Lip & Cheek Tint",
        deletPrice : " 299",
        price : " 194"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518543-RELOVE-BRUSHQUEEN_DETAIL-EYE_01-1080x1080-b291aa41-af19-4ece-96a7-3896a0143f15_1024x1024.jpg?v=1637324162",
        name : "Revolution Relove",
        desc : "Revolution Relove Brush Queen Pigment Blending Brush",
        deletPrice : " 299",
        price : " 194"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518536-RELOVE-BRUSHQUEEN_PIGMENT-BLENDING_01-1080x1080-c3b90e89-00e7-4eba-9c3a-d24f0a861ec3_1024x1024.jpg?v=1637324005",
        name : "Revolution Relove",
        desc : "Revolution Relove Brush Queen Flat Foundation Brush",
        deletPrice : " 299",
        price : " 194"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518529-RELOVE-BRUSHQUEEN_FLUFFY-BLENDING_01-1080x1080-01696780-d3ab-4588-95ed-af794e973a5f_1024x1024.jpg?v=1637323802",
        name : "Revolution Relove",
        desc : "Revolution Relove Brush Queen Fluffy Blending Brush",
        deletPrice : " 299",
        price : " 194"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518512-Relove-BrushQueen-FlatCrease-EyeBrush_1-1080x1080-7c902c33-ee68-4c4d-8406-7167ceb9b31d_1024x1024.jpg?v=1637323497",
        name : "Revolution Relove",
        desc : "Revolution Relove Brush Queen Flat Crease Eye Brush",
        deletPrice : " 299",
        price : " 194"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518505-RELOVE-BRUSHQUEEN_FLAT-FOUNDATION_01-1080x1080-db56ce32-9f9b-4645-8e24-fdb8dee59437_1024x1024.jpg?v=1637323389",
        name : "Revolution Relove",
        desc : "Revolution Relove Brush Queen Flat Foundation Brush",
        deletPrice : " 525",
        price : " 341"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518499-RELOVE-BRUSHQUEEN_BUFFING-BRUSH_01-1080x1080-acd4094e-dd5e-4ee4-a234-f95797a4caba_1024x1024.jpg?v=1637323229",
        name : "Revolution Relove",
        desc : "Revolution Relove Brush Queen Flat Foundation Brush",
        deletPrice : " 525",
        price : " 341"
    },
    {
        prodImage : "https://cdn.shopify.com/s/files/1/1743/7443/products/1518482-RELOVE-BRUSHQUEEN_ANGLED-POWDER_01-1080x1080-7183f52a-1c32-40f9-a2e3-776e8fcf93c1_1024x1024.jpg?v=1637323009",
        name : "Revolution Relove",
        desc : "Revolution Relove Brush Queen Angled Powder Brush",
        deletPrice : " 650",
        price : " 423"
    },
];

var cartArr =[];
cartData.map(function (event){
    var imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "prodImagediv")
    
    var image = document.createElement("img");
    imgDiv.append(image);
    
    var prodDesDiv = document.createElement("div");
    prodDesDiv.setAttribute("class", "prodDesc");
    
    var h3 = document.createElement("h3");
    h3.setAttribute("class", "Revolution Relove")
    
    var h4 =document.createElement("h4");
    h4.setAttribute("class", "relution")
    
    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "price");
    
    var delPrice = document.createElement("h1");
    delPrice.setAttribute("class", "deletPrice")
    
    var mainPrice = document.createElement("h1");
    mainPrice.setAttribute("class", "mainPrice")
    
    priceDiv.append(delPrice, mainPrice);
    prodDesDiv.append(priceDiv,h3,h4);
    
    var button = document.createElement("button");
    button.setAttribute("id", "addToCartBtn");
    // button.style.color= "red";
    button.textContent = "ADD TO CART";
    
    button.addEventListener("click", function(){
        addToCart(event);       

    })

    image.setAttribute("src" , event.prodImage);
    h3.textContent = event.name;
    h4.textContent = event.desc;
    delPrice.textContent = "₹ "+ event.deletPrice;
    mainPrice.textContent = "₹ "+ event.price ;

    var itemCart = document.createElement("div");
    itemCart.setAttribute("class", "productDiv")

    itemCart.append(imgDiv,prodDesDiv,button);

    document.querySelector(".allProducts").append(itemCart);

});

function addToCart(event){
    cartArr.push(event);
    localStorage.setItem("HokCartData", JSON.stringify(cartArr));
    document.querySelector(".cartCount").textContent = cartArr.length;
}

document.querySelector("#jumpToCart").addEventListener("click", displayCartData)

function displayCartData(){
    window.location.href = "soOnCart.html";


}