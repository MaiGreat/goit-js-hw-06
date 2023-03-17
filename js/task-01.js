

const numberOfItemEl = document.querySelectorAll("li.item");
console.log("Number of categories:", numberOfItemEl.length);


numberOfItemEl.forEach(function (item) {
    const findeNameH2 = item.firstElementChild.textContent;
    const numberLi = item.lastElementChild.children.length;;
    console.log(`Category: ${findeNameH2} 
Elements: ${numberLi}`)
    
})


