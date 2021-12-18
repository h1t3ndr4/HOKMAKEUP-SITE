let images = [
    "https://s-media-cache-ak0.pinimg.com/736x/24/1a/bd/241abd66d078720dc0b07f516eae028c--jamberry-party-jamberry-nail-wraps.jpg",
    "https://1.bp.blogspot.com/-4DPaCmq8448/VvL30CcggtI/AAAAAAAALNc/ql1AKNT3tsMEDBlkp96vCis_ansmdcTQA/s1600/thank%2Byou%2Bfor%2Byour%2Border.jpg"

]
  
let container = document.getElementById("imgbox")

let img1 = document.createElement("img")
img1.setAttribute("class" , "image")
img1.src = images[images.length-1]
container.append(img1)

let interval;

function startslideshow() {

    let count = 0;

    interval = setInterval(function(){

        container.innerHTML = null;

        if(count == images.length) {
            count = 0;
        } 

        let img = document.createElement("img") 
        img.setAttribute("class" , "image")
        img.src= images[count]

        container.append(img)
        count++

    },1000)

}

startslideshow()
