const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingCont = document.querySelector('ul');


for (let i = 0; i < ingredients.length; i +=1 ) {
  const ingEl = document.createElement("li");
  ingEl.textContent = ingredients[i];
  ingEl.classList.add("item");
  ingCont.append(ingEl);
}

