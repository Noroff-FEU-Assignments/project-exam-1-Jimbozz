
//Hero section on homepage.
async function getHero() {

  var heroUrl = "http://localhost/makers/wp-json/wp/v2/posts?categories=2&per_page=1&_embed";

  try {
    const response = await fetch(heroUrl);
    const heroResults = await response.json();
    console.log(heroResults);
    createHero(heroResults);
    
    
  }
  catch(error) {
    console.log(error);
  }

}

getHero();

function createHero(post) {

  var heroContainer = document.querySelector('.hero');
  var image = post[0]._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
  var genre = post[0]._embedded["wp:term"][0][0].name;
  
  
  heroContainer.style.backgroundImage = `url(${image})`;
    

    heroContainer.innerHTML += `
    <div class="hero-text">
      <div class="genre">${genre}</div>
      <a class="hero-title-link" href="/blog-article.html?id=${post[0].id}">
        <h1 class="hero-title">${post[0].title.rendered}</h1>
      </a> 
    </div>`
    ;   

}


//Featured posts section on homepage.




async function getFeatured() {

  var featuredUrl = "http://localhost/makers/wp-json/wp/v2/posts?tags=10&_embed";

  try {
    const response = await fetch(featuredUrl);
    const featuredResults = await response.json();
    console.log(featuredResults);
    createFeatured(featuredResults);
    
    
  }
  catch(error) {
    console.log(error);
  }

}

getFeatured();




function createFeatured(posts) {
  
  posts.forEach(function(post) {

    var featureImage = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
    

    var featuredContainer = document.querySelector('.featured-container');

   
   
    featuredContainer.innerHTML += `
        <a class="blog-link" href="/blog-article.html?id=${post.id}">
          <article class="featured-post">
            <div class="featured-text-container">
              <h4 class="featured-title">${post.title.rendered}</h4>
              <p class="featured-description">${post.excerpt.rendered}</p>
            </div>
            <img class="featured-image" src="${featureImage}" />
          </article>
        </a>`
    ; 
      
  })
}