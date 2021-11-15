const url = "http://localhost/makers/wp-json/wp/v2/posts?_embed";


const blogContainer = document.querySelector(".blog-container");

console.log(url);

async function getProducts() {

  try {
     const response = await fetch(url);
     const getResults = await response.json();
     createHTML(getResults);
     console.log(getResults);
  }
  catch(error) {
    console.log("what happened here!");
    console.log(error);
  }
}

getProducts();


function createHTML(posts) {
  posts.forEach(function(post) {
    let image = post._embedded["wp:featuredmedia"][0].source_url;

    blogContainer.innerHTML += `
    <a class="blog-link" href="#">
    <article class="blog-card">
      <img class="blog-image" src="${image}" alt="">
      <address class="author">${post._embedded.author[0].name}</address>
      <h4 class="blog-card-title">This will be the best blog post ever</h4>
    </article>
  </a>
      `;
    
      
  })
}