document.querySelector("#myform").addEventListener("submit", addItem);
var arr = JSON.parse(localStorage.getItem("page")) || []
displayTable(arr);

function addItem(event) {
    event.preventDefault();
    var contact = document.querySelector("#contact").value;
    var email = document.querySelector("#email").value;
    var checkbox = document.querySelector("#checkbox").value;
    var country = document.querySelector("#country").value;
    var first_name = document.querySelector("#first_name").value;
    var last_name = document.querySelector("#last_name").value;
};