let images = [
    "https://assets.onlinelabels.com/Images/Predesign/00000001/797/Thank-You-For-Ordering-With-Us-Editable-Label-Design-Free.PNG",
    "https://media.karousell.com/media/photos/products/2020/8/9/thank_you_for_your_order_stick_1596957818_4c080499_progressive.jpg",
    "https://rlv.zcache.com/thank_you_for_all_birthdays_black_gold_star_star_sticker-rff2bfbf6bfba49fe982f07e5f66245a5_0ugdr_8byvr_540.jpg"

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
