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
    const data = await response.json();
   
  }catch(error) {
    console.warn(error);
  }
}