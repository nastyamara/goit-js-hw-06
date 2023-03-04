const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingCont = document.querySelector('ul');

 const ingridientsList = ingredients.map((name) => {
  const ingEl = document.createElement("li");
  ingEl.textContent = name;
  ingEl.classList.add("item");
  return ingEl;
  }
)

ingCont.append(...ingridientsList);