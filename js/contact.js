// const form = document.querySelector('form#contact-form');


// form.addEventListener('submit', sendForm);
  

// async function sendForm(event) {
//   event.preventDefault();

//   const form = event.target;
//   const error = document.querySelector('.error-message');

//   try {

//     const response = await fetch(form.action, {

//     method: form.method,
//     body: new FormData(form)
    
    
//   });
//   console.log(response);
//     const data = await response.json();
    
//     console.log("fetched");

//     // if(input === invalid) {
//     //   error.display.style = "block";
//     // }
   
   
//   }catch(error) {
//     console.warn(error);

//   }
// }







const formSubmissionHandler = (event) => {
  event.preventDefault();

  const formElement = event.target,
    { action, method } = formElement,
    body = new FormData(formElement);

  fetch(action, {
    method,
    body
  })
    .then((response) => response.json())
    // .then((response) => {
    //   // Determine if the submission is not valid
    //   if (isFormSubmissionError(response)) {
    //     // Handle the case when there are validation errors
        
    
    //   }

    //   // Handle the happy path
      
      

    // })
    .catch((error) => {
      // Handle the case when there's a problem with the request
    });
};

const formElement = document.querySelector('form#contact-form');



const errorName = document.querySelector('.error-name');
const yourName = document.getElementById('your-name');
const thanks = document.getElementById('thanks');

yourName.oninvalid = invalid;
formElement.onsubmit = submit;

function invalid(event) {
  errorName.removeAttribute('hidden');
}

function submit(event) {
  formElement.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');

  // For this example, don't actually submit the form
  // event.preventDefault();
}