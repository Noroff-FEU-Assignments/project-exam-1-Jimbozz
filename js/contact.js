

const formElement = document.querySelector('form#contact-form');
const thanks = document.getElementById('thanks');
const fail = document.getElementById('thanks');


function submitSuccess(event) {
  formElement.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');
}
function submitFail(event) {
  formElement.setAttribute('hidden', '');
  fail.removeAttribute('hidden');
}



async function onSubmit(event) {
  event.preventDefault(); // Stop redirection
  
  try {
    const response = await fetch(event.target.action, {
      method: formElement.method,
      body: new FormData(formElement)
      
               
    });
    const data = await response.json();
    console.log(data);
    // Do stuff with the response
    submitSuccess();
    

  } catch(error) {
    // Show the user an error message that the submission failed
    submitFail();
    console.log(error);
  }
}

formElement.onsubmit = onSubmit;