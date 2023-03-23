/*
* File: app.js
* Author: Erős István
* Copyright: 2023, Erős István
* Group: Szoft I-2 N
* Date: 2023-02-23
* Github: https://github.com/erosistvan/
* Licenc: GNU GPL
*/

const radiusInput = document.querySelector('#radius');
const heightInput = document.querySelector('#height');
const areaInput = document.querySelector('#area');
const calcButton = document.querySelector('#calcButton');
const result = document.querySelector('#result');

calcButton.addEventListener('click', () => {
    console.log('Terület:')
    const radius = Number(radiusInput.value);
    const height = Number(heightInput.value);
    let area =calcArea(radius ,height);
    areaInput.value = area;
    console.log(area);
    result.style.display='block';
    deleteInputs();
});

function calcArea(radius,height){
let area = (1.0/3) * Math.pow(radius, 2) * Math.PI * height;
return area;
}

function deleteInputs(){
    radiusInput.value='';
    heightInput.value='';
}