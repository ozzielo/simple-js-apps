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

//This adds the pokemonList loop

for (let i = 0; i < pokemonList.length; i++){
  if ( pokemonList[i].height > 1){
     document.write( pokemonList[i].name + " - " + "(height: " + pokemonList[i].height + ") " + " - Wow That Is Huge!!" + "<br>" + "<br>" );
   }else {document.write( pokemonList[i].name + " - " + "(height: " + pokemonList[i].height + ") " + "<br>" + "<br>" );}


}
