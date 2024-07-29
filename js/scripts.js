let pokemonRepository = (function () {

  let pokemonList =
  [{
    name: 'Zubat', 
    type: '[poison, flying]', 
    height: 0.8, 
    weight: '7.5 kg'
  },
  {
    name: 'Pidgey', 
    type: '[flying, normal]', 
    height: 0.3, 
    weight: '1.8 kg'
  },
  {
    name: 'Charmander', 
    type: 'fire', 
    height: 0.6, 
    weight: '8.5 kg'
  },
  {
    name: 'Politoed', 
    type: 'water', 
    height: 1.1, 
    weight: '33.9 kg'
  }
  ];

function add(pokemon) {
  pokemonList.push(pokemon);
}
function getAll() {
  return pokemonList;
}
function addListItem(pokemon) {
  let pokemonList = document.querySelector('.pokemon-list');
  let listpokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-class');
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  listpokemon.classList.add('pokemon');
  button.addEventListener('click', function (){
    showDetails(pokemon);
  });
}
function showDetails(pokemon) {
  console.log (pokemon);
} 

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

//display pokemon with a forEach loop instead of a for loop
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});


//pokemonRepository.getAll().forEach(function(pokemon) {
//document.write(pokemon.name + ' ' + "(height:" + ' ' + pokemon.height + ') ' + '<br>');