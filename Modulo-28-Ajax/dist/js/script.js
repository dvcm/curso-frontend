
const url = 'https://api.github.com/users';
const main = document.getElementById('main');
// let user = 'marcelocant'
let text = '';

function getUser(user) {

    fetch(`${url}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            text += `<h1><p>${data.name} possui ${data.public_repos} repositórios <img class="card-img-top" src=${data.avatar_url} públicos no GitHub como ${data.login}</p></h1></img>`;
            main.innerHTML = text;
        })
        .catch((error) => console.error('Erro: ', error.message || error));

}

const userInput = document.getElementById('username');

userInput.addEventListener('focusout', function(event){
    getUser(event.target.value);
});


