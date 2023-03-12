const bar = document.querySelector('.uil-bars');
const show = document.querySelector('.show');

bar.addEventListener("click", function(){
    show.classList.toggle("active");
})