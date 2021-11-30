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
    .then((response) => {
      // Determine if the submission is not valid
      if (isFormSubmissionError(response)) {
        // Handle the case when there are validation errors
        
          // formElement.innerHTML = `
          //                 <div class="success"> Your form was submitted successfully.
          //                 </div>
          //                   `
        
      }
      // Handle the happy path
      
    })
    .catch((error) => {
      // Handle the case when there's a problem with the request
    });
};

const formElement = document.querySelector('form#contact-form');




// const normalizeContactForm7Response = (response) => {
//   // The other possible statuses are different kind of errors
//   const isSuccess = response.status === 'mail_sent';
//   // A message is provided for all statuses
//   const message = response.message;
//   const validationError = isSuccess
//     ? {}
//     : // We transform an array of objects into an object
//     Object.fromEntries(
//       response.invalid_fields.map((error) => {
//         // Extracts the part after "cf7-form-control-wrap"
//         const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];

//         return [key, error.message];
//       })
//     );

//   return {
//     isSuccess,
//     message,
//     validationError,
//   };
// };