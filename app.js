//goal: be able to input name and email
// 1. do not allow blank fields, error message. 
// 2. when you input name/email, store it in a list below form.
// 3. clear screen upon refresh. 


const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(click) {
    
    click.preventDefault();

    if (emailInput.value === '' || nameInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

    userList.appendChild(li);

    //clear fields
    nameInput.value = '';
    emailInput.value = '';
}
}
