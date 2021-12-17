document.querySelector("#form").addEventListener("submit",mylogin)
regUser= JSON.parse(localStorage.getItem("Useraccount"))
console.log(regUser)
function mylogin(event){
    event.preventDefault();
    email=document.querySelector("#eml").value
    password=document.querySelector("#pass").value
    
    for(var i=0; i<regUser.length; i++){
        if(regUser[i].email==email && regUser[i].password==password){
            console.log("reg")
        }
    }

}
document.querySelector("#lastbut").addEventListener("click",function(){
  window.location.href="create_acount.html"
})