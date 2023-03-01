const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    if (email.length > 1 && password.length > 1 )
    {
         const formData = {
        email,
        password,
    }
    console.log(formData)
    form.reset();
    }
  else { window.alert('Заповніть усі поля!!!');}

    

}
  