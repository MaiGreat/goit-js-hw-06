



const formEl = document.querySelector(".login-form");


formEl.addEventListener('submit', handleSubmit);
let info = [];

function handleSubmit(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
    alert('All fields must be filled');
    return;
    }
    
    const fullForm = {
    email: email.value,
    password: password.value,
    }
    
    console.log(fullForm)
    formEl.reset();
}
