
const wrapper = document.querySelector('.article-wrapper');
const blogText = document.querySelector('.article-wrapper');
const blogHeading = document.querySelector('.article-heading');
const headerImage = document.querySelector('.blog-header');
const title = document.querySelector('title');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get('id');
const finalId = parseInt(id)

console.log(finalId);




const url = "http://localhost/makers/wp-json/wp/v2/posts/" + finalId;



console.log(url);

async function blogInfo() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    
    
    console.log(result);

    title.innerHTML = `${result.title.rendered}`;
    wrapper.innerHTML = "";
    
   
    createHTML(result);

   
  }
  catch(error) {
    console.log(error);
  }

}


blogInfo();




function createHTML(result) {
  
  // let image = result[0]._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
  // let genre = result[0]._embedded["wp:term"][0][0].slug;

  headerImage.style.backgroundImage = `url(${result.featured_image_url})`;


  let htmlString = "";

//Need to figure out way of getting GENRE
  htmlString += `
    <section class="article-heading">
      <div class="genre">hello</div>
      <h1 class="article-title">${result.title.rendered}</h1>
    </section>
    <div class=article-text>
    ${result.content.rendered}
    </div>
    <section class="article-share">
          <p>Share this article...</p>
          <ul>
            <li><a class="article-link" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%3A5500%2Fblog-article.html&amp;src=sdkpreparse" target="_blank">Facebook</a></li>
            <li><a class="article-link" href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fblog-article.com%2F">Twitter</a></li>
          </ul>
        </section>
    
  `
  ;

  wrapper.innerHTML = htmlString;
}
