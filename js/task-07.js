const textToChangeFont = document.querySelector('#text');
const fontSize = document.querySelector('#font-size-control');

fontSize.addEventListener('input', onInputChange);

console.dir(textToChangeFont.textContent);

function onInputChange(event)  {

    const size = event.currentTarget.value;
    console.log(size);
textToChangeFont.style.fontSize = `${ size }px`;
};

