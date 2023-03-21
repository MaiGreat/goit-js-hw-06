 


const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener("input", (inputText) => {
    if (inputEl.value === '') {
    return outputEl.textContent = "Anonymous";
}
    outputEl.textContent = inputText.currentTarget.value;
});