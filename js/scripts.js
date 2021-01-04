let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  // function pokemonLoop(pokemon) {
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener("click", function(event){showDetails(pokemon);})
  }

  function showDetails(item){
    pokemonRepository.loadDetails(item).then(function (){
      showModal(item);
    });
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

    function loadDetails(item){
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details){
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,

  };


})();

function showModal(pokemon) {
  let modalContainer = document.querySelector("#modal-container");
  modalContainer.innerHTML = "";
  let modal = document.createElement("div");
  modal.classList.add("modal");
  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "Close";
  closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement("h1");
  titleElement.innerText = pokemon.name;

  let contentHeight = document.createElement("p");
  contentHeight.innerText = "Height: " + pokemon.height;

  let imageElement = document.createElement("img");
  imageElement.classList.add("modal-image");
  imageElement.src = pokemon.imageUrl;


  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentHeight);
  modalContainer.appendChild(modal);
  modal.appendChild(imageElement);

  window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

  modalContainer.classList.add('is-visible');

}
// document.querySelector("#show-modal").addEventListener("click", () => {
//   showModal('Modal title', 'This is the modal content!');
// });
let dialogPromiseReject; // This can be set later, by showDialog

function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');

  if (dialogPromiseReject) {
    dialogPromiseReject();
    dialogPromiseReject = null;
  }
}

function showDialog (title, text) {
  showModal(title, text);
  let modalContainer = document.querySelector("#modal-container");

  let modal = modalContainer.querySelector(".modal");

  let confirmButton = document.createElement("button");
  confirmButton.classList.add("modal-confirm");
  confirmButton.innerText = "Confirm";

  let cancelButton = document.createElement("button");
  cancelButton.classList.add("modal-cancel");
  cancelButton.innerText = "Cancel";

  modal.appendChild(confirmButton);
  modal.appendChild(cancelButton);

  confirmButton.focus();

  return new Promise((resolve, reject) => {
    cancelButton.addEventListener("click", hideModal);
    confirmButton.addEventListener("click", () => {
      dialogPromiseReject = null;
      hideModal();
      resolve();
    });
    dialogPromiseReject = reject;
  });
}



// pokemonRepository.add({ name: "Venusaur" });
// console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('title', 'text');
});
// pokemonRepository.getAll().forEach(function (pokemon) {
//   pokemonRepository.addListItem(pokemon);
// });
document.querySelector("#show-dialog").addEventListener("click", () => {
  showDialog("Confirm action", "Are you sure you want to do this?").then(function (){
    alert("Confirmed!");
  }, () => {
    alert("Not Confirmed");
  });
});
