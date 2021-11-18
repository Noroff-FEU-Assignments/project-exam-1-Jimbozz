const container = document.querySelector('.scrolling-cards');
const postsUrl = "http://localhost/makers/wp-json/wp/v2/posts?per_page=20&_embed";



async function getCards() {

  try {
    const response = await fetch(postsUrl);
    const results = await response.json();
    console.log(results);
    createPosts(results)
  }
  catch(error) {
    console.log(error);
  }

}

getCards();


function createPosts(posts) {
  posts.forEach(function(post) {
    
    

    container.innerHTML += `
          <a class="blog-link" href="/blog-article.html?id=${post.id}">
            <article class="blog-card">
              <img class="blog-card-image" src="/assets/images/frankie-cordoba-fPYJeMmYWM4-unsplash.jpg" />
              <div class="article-details">
                <address class="author">Jason Gennaro</address>
                <h4 class="blog-card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
              </div>
            </article>
          </a>`
    ;
      
  })
}