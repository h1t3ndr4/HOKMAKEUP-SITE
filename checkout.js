
var data = JSON.parse(localStorage.getItem("HokCartData")) ||[];


var totalPrice = 0;
for(var i=0; i<data.length; i++){
    totalPrice += Number(data[i].price);
}
var addprice = document.querySelector(".addPrice");
addprice.textContent = "₹ "+totalPrice;
var addTotal = document.querySelector(".Total");
addTotal.textContent = "₹ "+totalPrice;

// discount js Headers.......


document.querySelector("#apply").addEventListener("click", discount);
var promo = document.querySelector("#gift");
function discount(event){
    event.preventDefault();
    if(promo.value == "hok"){
        var disc =  totalPrice - (totalPrice * 0.3);
        addprice.textContent = null;
        addprice.textContent = "₹ "+ disc;
        addTotal.textContent = "₹ "+ disc;
        promo.value ="";

        document.querySelector(".discTotl").textContent = "₹ "+ disc;

        
    }
}


data.map(function (event){
    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");

    var image = document.createElement("img");
    imgDiv.append(image)
    var name = document.createElement("h2");
    var Mprice = document.createElement("h2");

    image.setAttribute("src", event.prodImage);
    name.textContent = event.desc;
    Mprice.textContent = "₹ "+event.price

    var itemCart = document.createElement("div")
    itemCart.append(imgDiv,name,Mprice)
    itemCart.setAttribute("class", "itemCart");

    document.querySelector(".allItems").append(itemCart);

    
})

document.querySelector("form").addEventListener("submit", addFormData);

var store = JSON.parse(localStorage.getItem("HokCustDetail")) ||[];
function addFormData(evnt){

       evnt.preventDefault();

        var email = document.querySelector("#email").value;
        var address = document.querySelector("#box").value;

        var formData = {
            emailId : email,
            address : address
        }
        store.push(formData);
        localStorage.setItem("HokCustDetail", JSON.stringify(store));
}

document.querySelector("#shop").addEventListener("click", function(){
    window.location.href = "shipping.html";
});
// console.log(store);

for(var i=0; i<store.length; i++){

    var cont = document.querySelector(".contact");
    cont.textContent = store[i].emailId;
    var add = document.querySelector(".address");
    add.textContent = store[i].address;
}

// change address define function here .......

 document.querySelector("#shop").addEventListener("click", function(){
     window.location.href = "card.html";
 })

function change(){
    window.location.href = "checkout.html"
}

// offer promo js Headers....



 
