let emailInput = document.getElementById('emailInput');
let button = document.querySelector('.btn');
let error = document.querySelector('.err');

button.addEventListener('click', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailInput.value.match(validRegex)){
        alert("Valid email address!");
        console.log('error');
        return true;
    }else {
        error.innerText = "Please enter a valid email";
    }


}