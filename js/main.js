'use strict';

import imageContainer from './module.js'

const slider = document.querySelector('.slider');
const imagePlace = document.querySelector('.image');
const counter = document.querySelector('.counter');
const leftArrow = document.querySelector('.left');
const rigthArrow = document.querySelector('.right');
const information = document.querySelector('.information');
const dotContainer = document.querySelector('.dots');
let step = 0
let something = false
let myTimeOut

//Ezt át kell majd rakni egy modulba



function timer(time) {
    myTimeOut = setTimeout(()=>{
        if (step == imageContainer.length - 1) {
            step = 0
            sliderFunc()
        // } else if(something == true) {
        //     return
        } else {
            step++;
            sliderFunc()}
    }, time)
};

function sliderFunc(height) {
    let count = 0;
    slider.style.height = height;
    
    for (let i = 0; i < imageContainer.length; i++) {
        count++
        imagePlace.innerHTML = `<img ${imageContainer[step].image} alt=""></img>`;
        information.innerText = imageContainer[step].information;
        counter.innerText = `${imageContainer[step].index}/${count}`// Ezzel még lesz valami
    };
    timer(5000);   
};

rigthArrow.addEventListener('click', () => {
    something = true;
    if (step == imageContainer.length - 1) {
        step = 0
        clearTimeout(myTimeOut);
        sliderFunc();
        
    } else {
        step++;     
        clearTimeout(myTimeOut)   
        sliderFunc();
    }
});

leftArrow.addEventListener('click', () => {
    something = true;
    if (step == 0) {
        step = imageContainer.length - 1;
        clearTimeout(myTimeOut)
        sliderFunc()
    } else {
        step--;
        clearTimeout(myTimeOut)
        sliderFunc()
    }
});

function dotCreate() {
    for (let i = 0; i < imageContainer.length; i++) {
        let dot = document.createElement('DIV');
        dot.classList.add('dot');
        dot.classList.add('fa');
        dot.classList.add('fa-circle');
        dotContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            step = i;  
            clearTimeout(myTimeOut)          
            sliderFunc();
        })
    };
};

dotCreate();
sliderFunc('500px');