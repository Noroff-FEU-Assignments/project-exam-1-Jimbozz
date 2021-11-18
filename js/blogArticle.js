
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


const url = "http://localhost/makers/wp-json/wp/v2/posts/" + finalId + "?&_embed";



console.log(url);

async function blogInfo() {
  try {
    const response = await fetch(url);
    const result = await response.json();
   
    title.innerHTML = `${result.title.rendered}`;
    wrapper.innerHTML = "";

    //See if there is another way to add class name to image

    window.onload = function() {
      const image3 = document.querySelector('.wp-block-image');
      image3.classList.add ("modal");
    };

    createHTML(result);


    createModal();
  
    

   
  }
  catch(error) {
    console.log(error);
  }

}


blogInfo();




function createHTML(result) {
  
  let image = result._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
  
  
  let genre = result._embedded["wp:term"][0][0].slug;

  headerImage.style.backgroundImage = `url(${image})`;

  let htmlString = "";

  htmlString += `
    <section class="article-heading">
      <div class="genre">${genre}</div>
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

//Function for modal
function createModal() {

  
  const figures = document.querySelectorAll('figure');
    for (let figure of figures) {
      figure.addEventListener("click", function() {
        // figure.className += " modal";
        console.log("hello")
      })
    }



}



// window.onload = function(){
  
  
//   const blogImage = document.querySelector(".wp-block-image");
//   console.log(blogImage);

//   // blogImage.onclick = function() {
//   //   // blogImage.classlist.add('modal');
//   //   console.log("clicked");
//   // } 

//   blogImage.addEventListener('click', function() {
//     console.log("you clicked");
//     // this.classlist.add("modal")
//   })
// };


