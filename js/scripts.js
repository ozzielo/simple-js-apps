let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if(typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else {
      alert("No Existing Pokemon")
    }
  }

  function getAll() {
    return pokemonList;
  }

  // function pokemonLoop(pokemon) {
  function addListItem(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      let row = $(".row");

      let card = $(
        '<div class="card mt-5" style="width: 18rem; margin:13px;"></div>'
      );
      let image = $(
        '<img class="card-img-top mx-auto" style="width:30%;" alt="...">'
      );
      let title = $('<h5 class="card-title">' + pokemon.name + "</h5>");
      image.attr("src", pokemon.imageUrlAnimated);
      let body = $('<div class="card-body" style="text-align: center;"></div>');

      let button = $(
        '<button type="button" class="btn" style="background-color: #324cbe; color: #ffdb00" data-toggle="modal" data-target="#exampleModal">See Profile</button>'
      );

      row.append(card);
      card.append(image);
      card.append(body);
      body.append(title);
      body.append(button);

      

      button.on("click", function (event) {
        showDetails(pokemon);


      });

    });

  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }




  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);

      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrlFront = details.sprites.other.dream_world.front_default;
      item.imageUrlAnimated =
        details.sprites.versions["generation-v"][
          "black-white"
        ].animated.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = [];
      details.types.forEach(function (itemType) {
        item.types.push(itemType.type.name);
      });
      item.abilities = [];
      details.abilities.forEach(function (itemAbilities) {
        item.abilities.push(itemAbilities.ability.name);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }


  let modalContainer = $("#modal-container");

  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + item.name + "</h1>");

    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", item.imageUrlBack);

    let heightElement = $("<p>" + "Height: " + item.height + "</p>");

    let weightElement = $("<p>" + "Weight: " + item.weight + "</p>");

    let typesElement = $("<p>" + "Types: " + item.types + "</p>");

    let abilitiesElement = $("<p>" + "Abilities: " + item.abilities + "</p>");

    if (item.types.includes("grass")) {
      $(".modal-header").css("background-color", "rgb(120, 200, 80)");
    } else if (item.types.includes("fire")) {
      $(".modal-header").css("background-color", "rgb(240, 128, 48)");
    } else if (item.types.includes("poison")) {
      $(".modal-header").css("background-color", "rgb(168, 144, 240)");
    } else if (item.types.includes("water")) {
      $(".modal-header").css("background-color", "rgb(104, 144, 240)");
    } else if (item.types.includes("bug")) {
      $(".modal-header").css("background-color", "rgb(168, 184, 32)");
    } else if (item.types.includes("water")) {
      $(".modal-header").css("background-color", "rgb(69, 120, 237)");
    } else if (item.types.includes("ice")) {
      $(".modal-header").css("background-color", "rgb(66, 174, 174)");
    } else if (item.types.includes("electric")) {
      $(".modal-header").css("background-color", "rgb(252, 234, 161)");
    } else if (item.types.includes("ground")) {
      $(".modal-header").css("background-color", "rgb(219, 181, 77)");
    } else if (item.types.includes("fairy")) {
      $(".modal-header").css("background-color", "rgb(232, 120, 144)");
    } else if (item.types.includes("ghost")) {
      $(".modal-header").css("background-color", "rgb(100, 78, 136)");
    } else if (item.types.includes("normal")) {
      $(".modal-header").css("background-color", "rgb(156, 156, 99)");
    }

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);

    modalContainer.addClass("is-visible");
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,

  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  // li = ul.getElementsByTagName("");
  li = ul.querySelectorAll(".card");
  // console.log(li[0].querySelector(".card-body").querySelector(".card-title"));
  for (i = 0; i < li.length; i++) {
    // a = li[i].getElementsByTagName("a")[0];
    a = li[i].querySelector(".card-body").querySelector(".card-title");
    console.log(a.innerText);
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
