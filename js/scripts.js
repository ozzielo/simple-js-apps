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

  function pokemonLoop(pokemon) {
    if (pokemon.height > 1){
      document.write( pokemon.name + " - " + "(height: " + pokemon.height + ") " + " - Wow That Is Huge!!" + "<br>" + "<br>" );
    }else {document.write( pokemon.name + " - " + "(height: " + pokemon.height + ") " + "<br>" + "<br>" );}
  }
  pokemonList.forEach(pokemonLoop);

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };


})();

pokemonRepository.add({ name: "Venusaur" });
pokemonRepository.getAll();


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
