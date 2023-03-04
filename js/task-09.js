const colorChangeBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorCode = document.querySelector('.color');

colorChangeBtn.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
  const colorName = body.style.backgroundColor;
  colorCode.textContent = colorName;
  // console.log(body.style.backgroundColor);
}

// const color = getRandomHexColor();
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}