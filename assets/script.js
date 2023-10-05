const slides = [
	{
		imageSlides: "slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		imageSlides: "slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		imageSlides:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		imageSlides:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]
console.log(slides)


const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', () => {
console.log("Clic sur la flèche gauche");	
});

arrowRight.addEventListener('click', () => {
console.log("Clic sur la flèche droite");
});

const dots = document.querySelectorAll('.dot');

let currentSlideIndex = 0;

function updateSlide(index) {
    const slide = slides[index];
    const image = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');
    const dotSelected = document.querySelector('.dot_selected');
    image.src = `./assets/images/slideshow/${slide.imageSlides}`;
    tagLine.innerHTML = slide.tagLine;
    dotSelected.classList.remove('dot_selected');
    dots[index].classList.add('dot_selected');
}


arrowLeft.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide(currentSlideIndex);
});


arrowRight.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide(currentSlideIndex);
});


updateSlide(currentSlideIndex);


