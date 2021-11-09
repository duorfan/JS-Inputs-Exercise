// const button = document.querySelector('#submitButton');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// let loader = document.querySelector('.loader');
// let Ending = document.querySelector('.ending');

function isNotEmpty(value){
  if (value !== '' || checked === true){
      password.style.border = '2px solid';
      password.style.borderRadius = '5px'
      password.style.borderColor = '#dc3545';
    }
  else {
      password.style.border = 'none';
  
    }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }

function removeSpinner() {
  Ending.style.visibility = `visible`;
  loader.style.display = 'none';
  }

// button.addEventListener('click', e => {
//   isNotEmpty(value);
//   emailValidation();   
// });
  