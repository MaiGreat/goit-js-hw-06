// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.


const body = document.querySelector('body');
const changeColorEl = document.querySelector('.change-color')
const backgroundColor = document.querySelector('.color')


changeColorEl.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const changeColor = getRandomHexColor();

  body.style.backgroundColor = changeColor;
  backgroundColor.textContent = changeColor;
    
      function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
}
