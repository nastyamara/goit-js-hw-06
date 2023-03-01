const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlur);

function onBlur(event) {
    const inputText = event.currentTarget.value;
    const inputTextLength = Number(inputText.length);
    const inputLength = Number(inputEl.getAttribute('data-length'));
    console.log(inputTextLength);
    console.log(inputLength);
    if (inputTextLength === inputLength) {
        inputEl.classList.add("valid")
        inputEl.classList.remove("invalid")
    }
    else {
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid")
        
    };
}

console.dir(inputEl);