const form = document.querySelector('form#contact-form');


form.addEventListener('submit', sendForm);
  

async function sendForm(event) {
  event.preventDefault();

  const form = event.target;


  try {

    const response = await fetch(form.action, {

    method: form.method,
    body: new FormData(form)
    
    
  });
  console.log(response);
    const data = await response.json();
    console.log("fetched");
   
   
  }catch(error) {
    console.warn(error);

  }
}




// const formSubmissionHandler = (event) => {
//   event.preventDefault();

//   const formElement = event.target,
//     { action, method } = formElement,
//     body = new FormData(formElement);

//   fetch(action, {
//     method,
//     body
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       // Determine if the submission is not valid
//       if (isFormSubmissionError(response)) {
//         // Handle the case when there are validation errors
//       }
//       // Handle the happy path
//       formElement.onsubmit = function formSuccess() {
//         formElement.innerHTML = `
//                         <div class="success"> Your form was submitted successfully.
//                         </div>
//                           `
//       }
//     })
//     .catch((error) => {
//       // Handle the case when there's a problem with the request
//     });
// };

// const formElement = document.querySelector('form#contact-form');


