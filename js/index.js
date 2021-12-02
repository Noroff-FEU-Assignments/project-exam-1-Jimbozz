
//Hero section on homepage.
async function getHero() {

  let heroUrl = "http://makerstories.no/index.php/wp-json/wp/v2/posts?categories=2&per_page=1&_embed";

  const corsEnabledIndex = "https://noroffcors.herokuapp.com/" + heroUrl;

  try {
    const response = await fetch(corsEnabledIndex);
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

  const heroContainer = document.querySelector('.hero');
  const image = post[0]._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
  const genre = post[0]._embedded["wp:term"][0][0].name;
  const title = post[0]._embedded["wp:featuredmedia"][0].alt_text;
  
  
  heroContainer.style.backgroundImage = `url(${image})`;
  heroContainer.title = title;
    

    heroContainer.innerHTML += `
    <div class="hero-text">
      <div class="genre">${genre}</div>
      <a title="${post[0].title.rendered}" class="hero-title-link" href="/blog-article.html?id=${post[0].id}">
        <h1 class="hero-title">${post[0].title.rendered}</h1>
      </a> 
    </div>`
    ;   

}


//Featured posts section on homepage.




async function getFeatured() {

  var featuredUrl = "http://makerstories.no/index.php/wp-json/wp/v2/posts?tags=10&_embed";

  const corsEnabledFeatured = "https://noroffcors.herokuapp.com/" + featuredUrl;

  try {
    const response = await fetch(corsEnabledFeatured);
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

    const featureImage = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
    const altText = post._embedded["wp:featuredmedia"][0].alt_text;
    

    const featuredContainer = document.querySelector('.featured-container');

   
   
    featuredContainer.innerHTML += `
        <a title="${post.title.rendered}" class="blog-link" href="/blog-article.html?id=${post.id}">
          <article class="featured-post">
            <div class="featured-text-container">
              <h4 class="featured-title">${post.title.rendered}</h4>
              <p class="featured-description">${post.excerpt.rendered}</p>
            </div>
            <img class="featured-image" src="${featureImage}" alt="${altText}">
          </article>
        </a>`
    ; 
      
  })
}