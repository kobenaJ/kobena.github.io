const openmenu = document.querySelector(".button-cache");
const slide = document.querySelector(".side-nav");
const closemenu = document.querySelector(".close-side");

openmenu.addEventListener('click', ()=> {
	slide.classList.toggle('menu');
})
closemenu.addEventListener('click', ()=> {
	slide.classList.toggle('menu');
})
