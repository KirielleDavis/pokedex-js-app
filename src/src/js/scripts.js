let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  //function that add pokemon into array with the following validation criteria
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  //function that returns the array
  function getAll() {
    return pokemonList;
  }

  //function that shows details that will be shown on the modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(
        pokemon.name,
        'Height: ' + pokemon.height, pokemon.imageFrontUrl);
      console.log(pokemon);
    });
  } 

  //function that generates
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    listpokemon.classList.add('pokemon');
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  //function that loads the list of pokemon for the cards
  function loadList() {
    return fetch(apiUrl).then(function (response){ //fetch returns a promise
      return response.json(); //.json() returns a promise
    }).then(function (json) {

      // forEach object in the parsed JSON Pokemon data
      json.results.forEach(function (item) {
        // Create a simple Pokemon object with name & detailsUrl
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        // Add the pokemon object to the repository list
        add(pokemon);
        console.log(pokemon);
      });

    }).catch(function (e) {
      console.error(e);
    })
  }

  //function promise preps info for the modal
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) { //fetch returns promise to load external details
      return response.json(); // /.json also returns a promise with parsed JSON data
    }).then(function (details) {

      // Add the details form the resolved promise to the Pokemon item
      item.imageFrontUrl = details.sprites.front_default;
      item.imageBackUrl = details.sprites.back_default;
      item.order = details.order;
      item.height = details.height;
      item.types = details.types;
      item.abilities = details.abilities

    }).catch(function (e) {
      console.error('pokemonRepository.loadDetails()|ERROR|'+e);
      alert('Error while loading Pokemon information :'+e)
    });
  }

  //function that attaches information to modal
  function showModal(title, text, img) {
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", img);
    imageElement.src = img; // set the image source to the sprite URL
    imageElement.setAttribute('alt', title + ' sprite');

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

    $('#myModal').modal('show');

    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }

    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,

  };
})();

//display pokemon with a forEach loop instead of a for loop
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
