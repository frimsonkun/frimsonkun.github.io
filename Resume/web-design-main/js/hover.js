
"use strict";
const about = document.querySelectorAll('.works-content__a');
about.forEach((element,index) => {
    element.addEventListener('mouseover', (e) =>{
        if(e.target.dataset.id == "def"){    
            e.target.classList.add('hide');
            about[index].querySelector('.works-element__info__hide').classList.remove('hide');
       
        }
    });  
    element.addEventListener('mouseout', (e) =>{
        if(e.target.dataset.id == "dev"){ 
            e.target.classList.add('hide');
            about[index].querySelector('.works-element__info').classList.remove('hide'); 
        
        }
    });
});
