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
//display pokemon and show which which one is the biggest
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' ' + "(height:" + ' ' + pokemonList[i].height + ') ');
  if (pokemonList[i].height > 1) { 
    document.write("- Wow, that's big!");
  }
  document.write('<br>');
}
