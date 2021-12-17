var buyProducts = JSON.parse(localStorage.getItem("HokCartData")) ||[];

var totalPrie = 0;
    for(var i=0; i<buyProducts.length; i++){
        totalPrie += Number(buyProducts[i].price);
    }
    document.querySelector(".totlAmmount").textContent= "₹ "+totalPrie;

// console.log(buyProducts);

buyProducts.map(function (evnt){
    // var div = document.createElement("div");
    // var imgDiv = document.createElement("div");

    // var img = document.createElement("img");
    // imgDiv.append(img)

    // var name = document.createElement("h2");
    // var desc = document.createElement("h2");
    // var dltPrice = document.createElement("h2");
    // var price = document.createElement("h2");

    // var data = {
    //     image : evnt.prodImage,
    //     name : evnt.name,
    //     description : evnt.desc,
    //     delePrice : evnt.deletPrice,
    // }

    // img.setAttribute("src", evnt.prodImage);
    // name.textContent = evnt.name;
    // desc.textContent = evnt.desc;
    // dltPrice.textContent = evnt.deletPrice
    // price.textContent = evnt.price;


    var image = document.createElement("img");
    image.setAttribute("src", evnt.prodImage);

    var img = document.createElement("div");
    img.setAttribute("class", "imgDiv");
    img.append(image);
    
    var h3 = document.createElement("h3");
    h3.textContent = evnt.name;
    
    
    var h4 =document.createElement("h4");
    h4.textContent = evnt.desc;


    var delPrice = document.createElement("h1");
    delPrice.textContent = "₹ "+ evnt.deletPrice;

    var mainPrice = document.createElement("h1");
    mainPrice.textContent = "₹ "+ evnt.price;


    
    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "price");
    
    
    priceDiv.append(delPrice, mainPrice);

    var desc = document.createElement("div");
    desc.setAttribute("class", "desc");
    
    var cartDiv = document.createElement("div")
    cartDiv.append(img,desc);
    cartDiv.setAttribute("class", "cartDiv");
    
    desc.append(h4,h3,priceDiv);
    document.querySelector(".productSide").append(cartDiv);
})


document.querySelector(".checkOutBtn").addEventListener("click",function (){
    window.location.href = "checkout.html"
})