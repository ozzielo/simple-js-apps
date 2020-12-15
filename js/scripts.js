let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur",
      height: 0.7,
      type:["grass","poison"]},

    { name: "Butterfree",
      height: 1.1,
      type:["bug","flying"]},

    { name: "Beedrill",
      height: 1,
      type:["bug","poison"]}
  ];

  // function pokemonLoop(pokemon) {
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener("click", function(event){showDetails(pokemon.name);})
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }
    // if (pokemon.height > 1){
    //   document.write( pokemon.name + " - " + "(height: " + pokemon.height + ") " + " - Wow That Is Huge!!" + "<br>" + "<br>" );
    // }else {document.write( pokemon.name + " - " + "(height: " + pokemon.height + ") " + "<br>" + "<br>" );}

  // pokemonList.forEach(pokemonLoop);

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };


})();

pokemonRepository.add({ name: "Venusaur" });
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});


//This adds the pokemonList loop

// for (let i = 0; i < pokemonList.length; i++){
//   if ( pokemonList[i].height > 1){
//      document.write( pokemonList[i].name + " - " + "(height: " + pokemonList[i].height + ") " + " - Wow That Is Huge!!" + "<br>" + "<br>" );
//    }else {document.write( pokemonList[i].name + " - " + "(height: " + pokemonList[i].height + ") " + "<br>" + "<br>" );}
//
//
// }
// function pokemonLoop(pokemon) {
//   if (pokemon.height > 1){
//     document.write( pokemon.name + " - " + "(height: " + pokemon.height + ") " + " - Wow That Is Huge!!" + "<br>" + "<br>" );
//   }else {document.write( pokemon.name + " - " + "(height: " + pokemon.height + ") " + "<br>" + "<br>" );}
// }
// pokemonList.forEach(pokemonLoop);
//
//
//
// let pokemonRepository = (function () {
//   let pokemonList = [
//     { name: "Bulbasaur",
//       height: 0.7,
//       type:["grass","poison"]},
//
//     { name: "Butterfree",
//       height: 1.1,
//       type:["bug","flying"]},
//
//     { name: "Beedrill",
//       height: 1,
//       type:["bug","poison"]}
//   ];
//
//   return {
//     add: function(pokemon) {
//       pokemonList.push(pokemon);
//     },
//     getAll: function() {
//       return pokemonList;
//     }
//   };
// })();
//
// console.log(pokemonRepository.getAll()); // []
// pokemonRepository.add({ name: 'Pikachu' });
// console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]
