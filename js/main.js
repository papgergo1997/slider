'use strict'

const slider = document.querySelector('.slider');
const imagePlace = document.querySelector('.image');
const counter = document.querySelector('.counter');
const leftArrow = document.querySelector('.left');
const rigthArrow = document.querySelector('.right');
const information = document.querySelector('.information');
const dotContainer = document.querySelector('.dots');


//Ezt át kell majd rakni egy modulba
const imageContainer = [
    {
        index: 1,
        image: `src="./img/Gleccsertó-víz.jpg"`,
        information: 'Egy gleccsertó, valahol Izlandon'
    },
    {
        index: 2,
        image: `src="./img/alca.jpg"`,
        information: 'Egy méh mindig tudja, hogyan álcázza magát'
    },
    {
        index: 3,
        image: `src="./img/Tó_vízjellele.jpg"`,
        information: 'Víz és levél'
    },
    {
        index: 4,
        image: `src="./img/bee-víz.jpg"`,
        information: 'Méh és virág'
    }

];

function sliderFunc(){
    let count = 0
    for (let i = 0; i < imageContainer.length; i++) {
        count++
        imagePlace.innerHTML = `<img ${imageContainer[i].image} alt=""></img>`;
        information.innerText = imageContainer[i].information;        
        counter.innerText = `${imageContainer[i].index}/${count}`// Ezzel még lesz valami
    }
}
sliderFunc();
rigthArrow.addEventListener('click', sliderFunc)
leftArrow.addEventListener('click', sliderFunc)



