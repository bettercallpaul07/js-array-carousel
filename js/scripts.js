const images = [
    "img/01",
    "img/02",
    "img/03",
    "img/04",
    "img/05"
]

console.log(images)



const carouselElement = document.querySelector("carousel");

for (let i=0; i < images.lenght; i++) {
    console.log(images(i))
    carouselElement.innerHTML += `<div class="slide"><img src=${images[i]}></div>`
}