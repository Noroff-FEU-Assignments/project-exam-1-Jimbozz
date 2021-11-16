const url = "http://localhost/makers/wp-json/wp/v2/posts?per_page=10&_embed";
const newUrl = "http://localhost/makers/wp-json/wp/v2/posts?per_page=4&_embed";
const loadMore = document.querySelector('.load-more');
const blogContainer = document.querySelector(".blog-container");



async function getProducts() {

  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults)
    console.log(getResults);

    var clicked = false

    loadMore.addEventListener('click', function() {

      async function moreProducts() {
        try {
          const response = await fetch(newUrl);
          const newResults = await response.json();
          console.log(newResults);

          clicked = true
    
          if(clicked === true) {
            console.log(newUrl); 
            // createHTML(getResults.slice(-4));
            createHTML(newResults)
            
          }else if(clicked === false) {
            return false
            
          }else {
            return false
          }
        }
        catch(error) {
          console.log("this is an error");
        }

      }
      moreProducts();
    })
     
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

// function createHTML(posts) {
  
//   for(let i = 0; i < post.length; i++) {
//     console.log("working!");
//   }
  
// }




////







// if (click === false) {
//   display first 10
  // createHTML(getResults.array[10]); 
// }else if(click === true) {
//   display the rest of the posts
// }



