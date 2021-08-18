const button = document.querySelector('.works-list__show-more');
let i = 1;
button.addEventListener('click',(e)=>{
    e.preventDefault();
    let loadedContent = document.querySelectorAll(`[data-value = "${i}"]`);
    loadedContent.forEach(element =>{
        element.classList.remove('hide');
    })
    i++;
})