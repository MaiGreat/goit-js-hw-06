// Яка кількість символів повинна бути в інпуті, зазначається
// в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//  якщо неправильна кількість - червоним.

const textInput = document.querySelector('input');
const textLength = textInput.getAttribute("data-length");


textInput.addEventListener("blur", event => {
//     if (event.target.value.length === Number(textLength)) {
//     textInput.classList.add('valid');
//     textInput.classList.remove('invalid');
//     } else {
//         textInput.classList.add('invalid');
//         textInput.classList.remove('valid');
// }
    textInput.classList.remove('valid', 'invalid');
    textInput.classList.add(
        event.target.value.length === Number(textLength)
        ? 'valid'
        : 'invalid'
    )
});


