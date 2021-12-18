document.querySelector("#form").addEventListener("submit", account);
var Userdata = JSON.parse(localStorage.getItem("Useraccount")) || [];
function account(event) {
  event.preventDefault();
  obj = {
    firstname: form.first.value,
    lastname: form.leb2.value,
    email: form.eml.value,
    password: form.pass.value,
  };

  Userdata.push(obj);
  localStorage.setItem("Useraccount", JSON.stringify(Userdata));
  window.location.href = "landing.html";
}
