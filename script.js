const leftButton = document.querySelector(".slide-left");
const rightButton = document.querySelector(".slide-right");
const sliderList = document.querySelectorAll(".slider-item");
const size = document.querySelectorAll(".size");

let sliderCounter = 0;

leftButton.disabled = true;

// setInterval(() => {
//    rightButton.click(); 
// }, 7000);

rightButton.addEventListener("click",()=>{
    leftButton.disabled = false;
    
    sliderCounter += 1;
    if(sliderCounter === 0){
        leftButton.disabled = true;
    }
    sliderList.forEach((item)=>{
        item.style.transform = `translateX(${-100 * sliderCounter}%)`;
    });
    if(sliderCounter >=8){
        sliderCounter = -1;
    }
});



leftButton.addEventListener("click",()=>{

    sliderCounter -= 1;
    sliderList.forEach((item)=>{
        item.style.transform = `translateX(${-100 * sliderCounter}%)`
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


        if(index === 5){
            actionFigureImgBg[index].style.width = `60%`;
            actionFigureImgBg[index].style.height = `100%`;
            actionFigureImgBg[index].style.left = `-30px`;
            actionFigureImgBg[index].style.bottom = `unset`;
        } else if(index === 7){
            actionFigureImgBg[index].style.width = `60%`;
            actionFigureImgBg[index].style.height = `100%`;
            actionFigureImgBg[index].style.left = `-50px`;
            actionFigureImgBg[index].style.bottom = `unset`;
        } else if(index === 9){
            actionFigureImgBg[index].style.width = `62%`;
            actionFigureImgBg[index].style.height = `90%`;
            actionFigureImgBg[index].style.left = `-30px`;
            actionFigureImgBg[index].style.bottom = `unset`;
        }
        else{
            actionFigureImgBg[index].style.width = `60%`;
            actionFigureImgBg[index].style.height = `100%`;
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
        item.style.transform = `translateX(${-100 * actionFigureCounter}%)`;
    });
    if(actionFigureCounter > 9){
        actionFigureCounter = -1;
    }
});

actionFigureSliderLeft.addEventListener("click", ()=>{
   actionFigureCounter -= 1;
   actionFigure.forEach((item)=>{
    item.style.transform = `translateX(${-100 * actionFigureCounter}%)`
   }); 

   if(actionFigureCounter === 0){
    actionFigureSliderLeft.disabled = true;
   }
});


const ledPosters = document.querySelectorAll(".led-poster");
const ledPosterImgBg = document.querySelectorAll(".led-poster-img-bg");

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
        item.style.transform = `translate(${-100 * ledPosterCounter}%)`;
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
        item.style.transform = `translate(${-100 * ledPosterCounter}%)`;
    });
});

// ledPosters.forEach((item, index)=>{
//     item.addEventListener("mouseover", ()=>{
        
//         ledPosterImgBg[index].style.width = `60%`;
//         ledPosterImgBg[index].style.height = `60%`;
//         // ledPosterImgBg[index].style.left = `unset`;
//     });

    
//     item.addEventListener("mouseout", ()=>{
//         ledPosterImgBg[index].style.width = `0`;
//         ledPosterImgBg[index].style.height = `0`;
//     });
// });


const splitDesignLeft = document.querySelector(".split-design-slider-left");
const splitDesignRight = document.querySelector(".split-design-slider-right");
const splitDesigns = document.querySelectorAll(".split-design");

let splitDesignCounter = 0;
splitDesignLeft.disabled = true;


splitDesignRight.addEventListener("click", ()=>{
    splitDesignLeft.disabled = false;

    splitDesignCounter += 1;

    if(splitDesignCounter === 0){
        splitDesignLeft.disabled = true;
    }
    
    splitDesigns.forEach((item)=>{
        item.style.transform = `translateX(${-100 * splitDesignCounter}%)`;
    });
    if(splitDesignCounter >= 6){
        splitDesignCounter = -1;
    }
});

splitDesignLeft.addEventListener("click", ()=>{
    splitDesignCounter -= 1;
    if(splitDesignCounter === 0){
        splitDesignLeft.disabled = true;
    }
    splitDesigns.forEach((item)=>{
        item.style.transform = `translateX(${-100 * splitDesignCounter}%)`;
    });
});

