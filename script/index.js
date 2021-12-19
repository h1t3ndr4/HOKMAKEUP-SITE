// SlideShow JS

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Login PopUp JS

var loginn = document.getElementById("loginn");
var log = document.getElementById("log");
var closeWin = document.getElementById("close");

log.addEventListener("click", showlogin);
function showlogin() {
  loginn.style.display = "block";
}

closeWin.addEventListener("click", hiddlogin);

function hiddlogin() {
  loginn.style.display = "none";
}

// Login Data JS

document.querySelector("#form").addEventListener("submit", mylogin);
var regUser = JSON.parse(localStorage.getItem("Useraccount"));
console.log(regUser);
function mylogin(event) {
  event.preventDefault();
  email = document.querySelector("#eml").value;
  password = document.querySelector("#pass").value;

  for (var i = 0; i < regUser.length; i++) {
    if (regUser[i].email == email && regUser[i].password == password) {
      window.location.href = "./logout.html";
      alert("Login Successful");
      break;
    } else {
      alert("Invalid Email Or Password");
      break;
    }
  }
}


