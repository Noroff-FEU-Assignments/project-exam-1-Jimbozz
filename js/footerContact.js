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
      }
      // Handle the happy path
    })
    .catch((error) => {
      // Handle the case when there's a problem with the request
    });
};

const formElement = document.querySelector("form");

formElement.addEventListener("submit", formSubmissionHandler);