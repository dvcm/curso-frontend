


//const postContainer = document.getElementById('user');
let postMarkup = '';
let postLength = 0;

// Cadastra um post
function setPost(data) {

  fetch('https://jsonplaceholder.typicode.com/users/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type' : 'application/json; charset=UTF-8'
      }
  })
  .then( response => response.json())
  .then( data => console.log(data))
  .catch(error => console.error(error))  ; 
}

// Solicita todos os posts
function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/users/', {
      headers: {
          'Content-Type' : 'application/json; charset=UTF-8'
      }
  })
  .then( response => response.json())
  .then( data => { 
      postLength = data.length;
      console.log(postLength);
   })
  .catch(error => console.error(error))  ;
}

// Solicita um post por ID
function getPost(id) {
  fetch('https://jsonplaceholder.typicode.com/users/' + id, {
      headers: {
          'Content-Type' : 'application/json; charset=UTF-8'
      }
  })
  .then( response => response.json())
  .then( post => { 
          postMarkup += `
              <div class="posts-item" id="post-${post.id}">
                  <h3>${post.title}</h3>
                  <p><img src=${post.thumbnailUrl}</p>
              </div>
          `;
      postContainer.innerHTML = postMarkup;
   })
  .catch(error => console.error(error))  ;
}

let postIndex = 1;
getPosts();
getPost(postIndex);

const loadPost = document.getElementById('loadPost');

loadPost.addEventListener('click', function(e) {
  if(postIndex < postLength)
      getPost(postIndex += 1);
});