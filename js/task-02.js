const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const id = document.querySelector('#ingredients');


const listItem = ingredients.map((ingredient) => {
  const createLi = document.createElement('li');
  console.log(createLi);
  createLi.textContent = ingredient;
  createLi.classList.add('item');
  return createLi;
})

id.append(...listItem)





// for (let i = 1; i <= 5; i += 1) {
//   const createLi = document.createElement('li');
//   console.log(createLi)
//   createLi.innerHTML = ingredients[i];
//   createLi.classList.add("item");
//   id.appendChild(createLi); 
// }