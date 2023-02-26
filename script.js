const leftButton = document.querySelector(".slide-left");
const rightButton = document.querySelector(".slide-right");
const sliderList = document.querySelectorAll(".slider-item");
const size = document.querySelectorAll(".size");

let sliderCounter = 0;

leftButton.disabled = true;

setInterval(() => {
   rightButton.click(); 
}, 5000);

rightButton.addEventListener("click",()=>{
    leftButton.disabled = false;
    
    sliderCounter += 1;
    if(sliderCounter === 0){
        leftButton.disabled = true;
    }
    sliderList.forEach((item)=>{
        item.style.transform = `translateX(${-100 * sliderCounter}vw)`;
    });
    if(sliderCounter >=8){
        sliderCounter = -1;
    }
});



leftButton.addEventListener("click",()=>{

    sliderCounter -= 1;
    sliderList.forEach((item)=>{
        item.style.transform = `translateX(${-100 * sliderCounter}vw)`
    });
    if(sliderCounter === 0){
        leftButton.disabled = true;
    }
});



size.forEach((item)=>{
    item.addEventListener("click", ()=>{
        size.forEach((item)=>{
            item.style.backgroundColor = '#fff';
        })

        item.style.backgroundColor = '#dcdada';
    });
});