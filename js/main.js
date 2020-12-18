'use strict'

const counter = document.querySelector('.counter');
const leftArrow = document.querySelector('.left');
const rigthArrow = document.querySelector('.right');
const information = document.querySelector('.information');
const dotContainer = document.querySelector('.dots');



const imageContainer = [
    {
        index: 1,
        image: `url('../img/Gleccsertó-víz.jpg')`,
        information: 'Egy gleccsertó, valahol Izlandon'
    },
    {
        index: 2,
        image: `url('../img/alca.jpg')`,
        information: 'Egy méh mindig tudja, hogyan álcázza magát'
    },
    {
        index: 3,
        image: `url('../img/Tó_vízjellele.jpg')`,
        information: 'Víz és levél'
    },
    {
        index: 4,
        image: `url('../img/bee-víz.jpg')`,
        information: 'Méh és virág'
    }

];

