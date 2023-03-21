
const input = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');


input.addEventListener('input', movePoint);

function movePoint() {
    inputText.style.fontSize = input.value + 'px';
    console.log(inputText.style.fontSize);
}

