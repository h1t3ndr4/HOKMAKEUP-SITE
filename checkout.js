// document.querySelector("#myform").addEventListener("submit", addItem);
// var arr = JSON.parse(localStorage.getItem("page")) || []
// displayTable(arr);

// function addItem(event) {
//     event.preventDefault();
//     var contact = document.querySelector("#contact").value;
//     var email = document.querySelector("#email").value;
//     var checkbox = document.querySelector("#checkbox").value;
//     var country = document.querySelector("#country").value;
//     var first_name = document.querySelector("#first_name").value;
//     var last_name = document.querySelector("#last_name").value;
// };

var data = JSON.parse(localStorage.getItem("HokCartData")) ||[];
// console.log(data);


var totalPrice = 0;
for(var i=0; i<data.length; i++){
    totalPrice += Number(data[i].price);
}
document.querySelector(".addPrice").textContent = "₹ "+totalPrice;
document.querySelector(".Total").textContent = "₹ "+totalPrice;


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
})
// console.log(store);

for(var i=0; i<store.length; i++){

    var cont = document.querySelector(".contact");
    cont.textContent = store[i].emailId;
    var add = document.querySelector(".address");
    add.textContent = store[i].address;
}

