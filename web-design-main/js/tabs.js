"use strict";
const info = document.querySelectorAll('.info-list__item');
const images = document.querySelectorAll('.info-item');
let i = 0;
const mainFunc =() =>{
    
}
info.forEach((element,index)=>{
    element.addEventListener('click',(e)=>{
        e.preventDefault();
        i=index;
            images.forEach(ele =>{
                ele.classList.remove("fade");
                ele.classList.add("hide");
            })
            info.forEach(ele =>{
                ele.classList.remove('active'); 
            })
            images[index].classList.add("fade");  
            images[index].classList.remove("hide");  
            info[index].classList.add('active');

    })
})
let func = setInterval(()=>{
    if(i === 4){
        i=0;
    }
    images.forEach(ele =>{
        ele.classList.remove("fade");
        ele.classList.add("hide");
    })
    info.forEach(ele =>{
        ele.classList.remove('active'); 
    })
    images[i].classList.add("fade");  
    images[i].classList.remove("hide");
    info[i].classList.add('active');  
    i++;
},3000)
