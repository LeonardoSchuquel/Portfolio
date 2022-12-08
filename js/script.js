//animation
const name = document.querySelector('h1')

function typewriter(elemento){
    const nameArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    nameArray.forEach((letter, i) =>{
        setTimeout(() => elemento.innerHTML += letter, 75 * i);
    });;
}

typewriter(name);

//projects already done
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slider = document.querySelector(".slide");

prev.addEventListener('click', () => {
    slider.scrollLeft -= 310;
})

next.addEventListener('click', () => {
    slider.scrollLeft += 310;
})