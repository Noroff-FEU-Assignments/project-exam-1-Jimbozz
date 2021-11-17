
const wrapper = document.querySelector('.article-wrapper');
const blogText = document.querySelector('.article-wrapper');
const blogHeading = document.querySelector('.article-heading');
const headerImage = document.querySelector('.blog-header');
const title = document.querySelector('title');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');


const url = "http://localhost/makers/wp-json/wp/v2/posts?filter=" + id + "&_embed";

console.log(url);

async function blogInfo() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    

    title.innerHTML = `${result[0].title.rendered}`;
    // wrapper.innerHTML = "";
    console.log(result);
    
   
    createHTML(result);

    
   
  }
  catch(error) {
    console.log("something went wrong");
  }

}


blogInfo();




// function createHTML(result) {

//   let genre = result._embedded["wp:featuredmedia"][0].alt_text;
//   console.log(genre);

  

//   wrapper.innerHTML = `
//         <section class="article-heading">
//           <div class="genre">${result[0].title.rendered}</div>
//           <h1 class="article-title">This is a blog post title</h1>
//         </section>
//   `
//   ;


// }


function createHTML(result) {
  
  let image = result[0]._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
  let genre = result[0]._embedded["wp:term"][0][0].slug;

  headerImage.style.backgroundImage = `url(${image})`;


  let htmlString = "";


  htmlString += `
    <section class="article-heading">
      <div class="genre">${genre}</div>
      <h1 class="article-title">${result[0].title.rendered}</h1>
    </section>
    <div class=article-text>
    ${result[0].content.rendered}
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
