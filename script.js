const leftButton = document.querySelector(".slide-left");
const rightButton = document.querySelector(".slide-right");
const sliderList = document.querySelectorAll(".slider-item");
const size = document.querySelectorAll(".size");

let sliderCounter = 0;

leftButton.disabled = true;

setInterval(() => {
   rightButton.click(); 
}, 7000);

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


const actionFigure = document.querySelectorAll(".action-figure");
const actionFigureImgBg = document.querySelectorAll(".action-figure-img-bg");

actionFigure.forEach((item, index)=>{

    item.addEventListener("mouseover", ()=>{

        if(index === 7){
            actionFigureImgBg[index].style.width = `600px`;
            actionFigureImgBg[index].style.height = `600px`;
            actionFigureImgBg[index].style.left = `-50px`;
            actionFigureImgBg[index].style.bottom = `unset`;
        } else if(index === 9){
            actionFigureImgBg[index].style.width = `600px`;
            actionFigureImgBg[index].style.height = `600px`;
            actionFigureImgBg[index].style.left = `-70px`;
            actionFigureImgBg[index].style.bottom = `unset`;
        }
        else{
            actionFigureImgBg[index].style.width = `600px`;
            actionFigureImgBg[index].style.height = `600px`;
            actionFigureImgBg[index].style.left = `0px`;
            actionFigureImgBg[index].style.bottom = `unset`;
        }
    });
    
    item.addEventListener("mouseout", ()=>{
        actionFigureImgBg[index].style.width = `0`;
        actionFigureImgBg[index].style.height = `0`;
        actionFigureImgBg[index].style.left = `300px`;
        actionFigureImgBg[index].style.bottom = `0`;
    });
    
});

const actionFigureSliderRight = document.querySelector(".action-figure-slider-right");
const actionFigureSliderLeft = document.querySelector(".action-figure-slider-left");

let actionFigureCounter = 0;
actionFigureSliderLeft.disabled = true;

actionFigureSliderRight.addEventListener("click", ()=>{
    
    actionFigureSliderLeft.disabled = false;

    actionFigureCounter += 1;
    if(actionFigureCounter === 0){
        actionFigureSliderLeft.disabled = true;
    }
    actionFigure.forEach((item)=>{
        item.style.transform = `translateX(${-50 * actionFigureCounter}vw)`;
    });
    if(actionFigureCounter > 9){
        actionFigureCounter = -1;
    }
});

actionFigureSliderLeft.addEventListener("click", ()=>{
   actionFigureCounter -= 1;
   actionFigure.forEach((item)=>{
    item.style.transform = `translateX(${-50 * actionFigureCounter}vw)`
   }); 

   if(actionFigureCounter === 0){
    actionFigureSliderLeft.disabled = true;
   }
});


const ledPosters = document.querySelectorAll(".led-poster");

const ledPosterSliderLeft = document.querySelector(".led-poster-slider-left");
const ledPosterSliderRight = document.querySelector(".led-poster-slider-right");

let ledPosterCounter = 0;
ledPosterSliderLeft.disabled = true;

ledPosterSliderRight.addEventListener("click", ()=>{
    ledPosterSliderLeft.disabled = false;
    

    ledPosterCounter += 1;
    if(ledPosterCounter === 0){
        ledPosterSliderLeft.disabled = true;
    }
    ledPosters.forEach((item)=>{
        item.style.transform = `translate(${-50 * ledPosterCounter}vw)`;
    });
    if(ledPosterCounter >= 6){
        ledPosterCounter = -1;
    }
});

ledPosterSliderLeft.addEventListener("click", ()=>{
    ledPosterCounter -= 1;
    if(ledPosterCounter === 0){
        ledPosterSliderLeft.disabled = true;
    }
    ledPosters.forEach((item)=>{
        item.style.transform = `translate(${-50 * ledPosterCounter}vw)`;
    });
});