const container = document.querySelector('.scrolling-cards');
const postsUrl = "http://localhost/makers/wp-json/wp/v2/posts?per_page=20&_embed";



async function getCards() {

  try {
    const response = await fetch(postsUrl);
    const results = await response.json();
    console.log(results);
    createPosts(results);
    buttonClicks();
    
  }
  catch(error) {
    console.log(error);
  }

}

getCards();


function createPosts(posts) {
  posts.forEach(function(post) {

    let blogImage = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
    
    
    container.innerHTML += `
          <a class="blog-link" href="/blog-article.html?id=${post.id}">
            <article class="blog-card">
              <img class="blog-card-image" src="${blogImage}"/>
              <div class="article-details">
                <address class="author">${post._embedded.author[0].name}</address>
                <h4 class="blog-card-title">${post.title.rendered}</h4>
              </div>
            </article>
          </a>`
    ;
      
  })
}

//Function to create scroll with button clicks.

function buttonClicks() {

  const buttonR = document.querySelector('.fa-chevron-right');
  const buttonL = document.querySelector('.fa-chevron-left');

  buttonR.onclick = function () {
    container.scrollLeft += 900;
  };
  buttonL.onclick = function () {
    container.scrollLeft += -900;
  };


}