// Function for burger menu

const navSlider = function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-unique');

  burger.addEventListener('click', function() {

    nav.classList.toggle('nav-active');
    burger.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
}

navSlider();



//Function for blog link dropdown in nav


let blogButton = document.querySelector('.blog-button');
let blogContent = document.querySelector('.blog-content');


blogButton.addEventListener('click',function() {

   if(blogContent.style.display === ""){
      blogContent.style.display = "block";
      blogButton.style.transform = "rotate(180deg)";

   } else {
      blogContent.style.display = "";
      blogButton.style.transform = "none";
   }
})

//Function for footer email signup



const formEnd = "http://www.makerstories.no/wp-json/contact-form-7/v1/contact-forms/138/feedback";
const corsFooter = "https://noroffcors.herokuapp.com/" + formEnd;

// const footerForm = document.querySelector('.footer-form').action = corsFooter;







         

