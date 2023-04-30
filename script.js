let emailInput = document.getElementById('emailInput');
let button = document.querySelector('.btn');
let error = document.querySelector('.errorDiv');

button.addEventListener('click', handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    // console.log(emailInput.value)

    if(emailInput.value.match(validRegex)){
        alert("Valid email address!");
        console.log('error');
        return true;
    } else {
        error.style.display = 'block';
        error.innerHTML = "Please enter a valid email";
    }


}