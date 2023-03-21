// Напиши скрипт, який реагує на зміну значення input#font - size - control
// (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector('#font-size-control');
console.log(input);
const inputText = document.querySelector('#text');
console.log(inputText);
let step = 0;

input.addEventListener('input', movePoint);

function movePoint(event) {
    step += 1;
    event.target.style.fontSize = step + 'px';
   
}