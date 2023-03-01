const decrBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');




const counter = {
    value: 0,
    onIncBtn() {
        this.value += 1;
    }
,
    onDecBtn() {
        this.value -= 1;
    }
};


incBtn.addEventListener('click', function () {
    counter.onIncBtn()
    valueEl.textContent = counter.value;
}
);    

decrBtn.addEventListener('click', function () {
    counter.onDecBtn()
    valueEl.textContent = counter.value;
}
);    

