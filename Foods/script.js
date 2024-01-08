const icons = document.querySelectorAll('.section-1-icons i')
let currentIndex = 0; 

setInterval(() => {
    icons[currentIndex].classList.remove('change')
    currentIndex++;
    if(currentIndex >= icons.length){
        currentIndex = 0;
    }
    icons[currentIndex].classList.add('change')
}
,350)