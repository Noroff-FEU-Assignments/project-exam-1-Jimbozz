const url = "http://localhost/makers/wp-json/wp/v2/posts?per_page=10&_embed";
const newUrl = "http://localhost/makers/wp-json/wp/v2/posts?per_page=20&_embed";
const loadMore = document.querySelector('.load-more');
const blogContainer = document.querySelector(".blog-container");



async function getPosts() {

  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults)
    
    console.log(getResults);

    var clicked = false

    loadMore.addEventListener('click', function() {

      async function morePosts() {
        try {
          const response = await fetch(newUrl);
          const newResults = await response.json();
          console.log(newResults);

          clicked = true
    
          if(clicked) { 
            blogContainer.innerHTML = "";
            createHTML(newResults)

          }else {
           false
          }
        }
        catch(error) {
          console.log("this is an error");
        }
      }
      morePosts();
    })
     
  }
  catch(error) {
    console.log("what happened here!");
    console.log(error);
  }
}

getPosts();


function createHTML(posts) {
  posts.forEach(function(post) {
    let image = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
    let imageText = post._embedded["wp:featuredmedia"][0].alt_text;
    

    blogContainer.innerHTML += `
    <a class="blog-link" href="/blog-article.html?id=${post.id}">
      <article class="blog-card">
        <img class="blog-image" src="${image}" alt="${imageText}">
        <address class="author">${post._embedded.author[0].name}</address>
        <h4 class="blog-card-title">${post.title.rendered}</h4>
      </article>
    </a>`
    ;
      
  })
}











