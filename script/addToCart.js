var cartData = [
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/Wet-N-Wild-Silk-Finish-Lipstick-WhatS-Up-Doc_b219bc9c-38bb-4756-82fd-dcc75c8593c6_1024x1024.jpg?v=1615547171",
    name: "Wet N Wild Silk Finish Lipstick",
    desc: "Wet N Wild's lipstick formula contains all the same things",
    deletPrice: "195",
    price: " 127",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/GC969_prod_img_1024x1024_93844633-9609-4016-87f0-dceebdcd90dc_1024x1024.jpg?v=1630140313",
    name: "LA Girl Pro Conceal HD",
    desc: "Ace your base with L.A. Girl HD Pro Concealers.",
    deletPrice: " 695",
    price: " 452",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/golden_beige_0548b90d-464c-43f1-9548-f22d4ebe45cb_1024x1024.jpg?v=1630140915",
    name: "Wet N Wild Photo Foundation",
    desc: "Ace your base with the new high-performing",
    deletPrice: "699",
    price: "454",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/3_231e5c6e-3a7a-4aaf-ae6e-cf0ccbbdeb14_1024x1024.jpg?v=1621436677",
    name: "Wet N Wild Megalast Liquid",
    desc: "Catsuit up your lips for an ideal hot look",
    deletPrice: "599",
    price: "389",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/1111556_1_1_1024x1024.jpg?v=1630140794",
    name: "Wet N Wild Color Icon Blush",
    desc: "Fun and trendy makeup company Wet n Wild",
    deletPrice: "499",
    price: "324",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/la-girl-pro-coverage-illuminating-hd-foundation-nude-beige_1024x1024.jpg?v=1621594714",
    name: "LA Girl Pro Coverage",
    desc: "Developed to deliver gorgeous flawless results",
    deletPrice: "1250",
    price: "813",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/Final_213_RVB_Ecomm_Feb2145568253_1024x1024.jpg?v=1624615600",
    name: "Revolution Conceal",
    desc: "The lightweight concealer covers blemishes",
    deletPrice: "695",
    price: "452",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/single_sugar_1024x1024.jpg?v=1615549411",
    name: "Wet N Wild Color Icon Eyeshadow",
    desc: "Make beautiful eye catching looks",
    deletPrice: "155",
    price: " 78",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/l-a-colors-matte-lipstick-red-tango_1024x1024.jpg?v=1630136835",
    name: "L.A. Colors Matte Lip Color",
    desc: "Matte lovers rejoice! L.A. Colours",
    deletPrice: "250",
    price: "125",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/physicians-formula-the-healthy-lip-velvet-liquid-lipstick-noir-ishing-plum_00c5b190-4394-4f45-9a11-521aec074fb5_1024x1024.jpg?v=1613720981",
    name: "Lip Velvet Liquid Lipstick",
    desc: "The Healthy Lip Velvet Liquid",
    deletPrice: "650",
    price: "423",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/C30458_prod_img_1024x1024_58250f86-03ba-4cc5-ab5e-ccd90e0085e6_1024x1024.jpg?v=1630136819",
    name: "L.A. Colors 20 Color Eyeshadow",
    desc: "The palette features an array of 20",
    deletPrice: " 525",
    price: " 341",
  },
  {
    prodImage:
      "https://cdn.shopify.com/s/files/1/1743/7443/products/40259_1_270x270.jpg?v=1592903619",
    name: "Revolution Pro Foundation",
    desc: "Revolution Pro Foundation drops",
    deletPrice: "1250",
    price: "813",
  },
];

var cartArr = [];
cartData.map(function (event) {
  var imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "prodImagediv");

  var image = document.createElement("img");
  imgDiv.append(image);

  var prodDesDiv = document.createElement("div");
  prodDesDiv.setAttribute("class", "prodDesc");

  var h3 = document.createElement("h3");
  h3.setAttribute("class", "Revolution Relove");

  var h4 = document.createElement("h4");
  h4.setAttribute("class", "relution");

  var priceDiv = document.createElement("div");
  priceDiv.setAttribute("class", "price");

  var delPrice = document.createElement("h1");
  delPrice.setAttribute("class", "deletPrice");

  var mainPrice = document.createElement("h1");
  mainPrice.setAttribute("class", "mainPrice");

  priceDiv.append(delPrice, mainPrice);
  prodDesDiv.append(priceDiv, h3, h4);

  var button = document.createElement("button");
  button.setAttribute("id", "addToCartBtn");
  // button.style.color= "red";
  button.textContent = "ADD TO CART";

  button.addEventListener("click", function () {
    addToCart(event);
  });

  image.setAttribute("src", event.prodImage);
  h3.textContent = event.name;
  h4.textContent = event.desc;
  delPrice.textContent = "₹ " + event.deletPrice;
  mainPrice.textContent = "₹ " + event.price;

  var itemCart = document.createElement("div");
  itemCart.setAttribute("class", "productDiv");

  itemCart.append(imgDiv, prodDesDiv, button);

  document.querySelector(".allProducts").append(itemCart);
});

function addToCart(event) {
  cartArr.push(event);
  localStorage.setItem("HokCartData", JSON.stringify(cartArr));
  document.querySelector(".cartCount").textContent = cartArr.length;
}

document
  .querySelector("#jumpToCart")
  .addEventListener("click", displayCartData);

function displayCartData() {
  window.location.href = "soOnCart.html";
}
