// any initializations of the application
//any global varibales
const base_url = "http://127.0.0.1:3000";
const pokemonService = new PokemonService(base_url); //you need a new instance because when you make fetch calls, they are new instances.
Pokemon.pokemonForm.addEventListener("submit", processSubmit);
//detailService.getDetails()
// any reading or fetching data
Pokemon.renderForm();
pokemonService.getPokemon();

function processSubmit() {
  //function the data from the form and submit post request
  event.preventDefault(); //forms have default behavior of refresh
  pokemonService.createPokemon();
  event.target.reset(); //clears the form
}
const usercommentsForm = document.getElementById("user-comments-form");
usercommentsForm.addEventListener("submit", processUsercommentsformsubmit);

function processUsercommentsformsubmit(event) {
 event.preventDefault()
 const newcommenttextelement = document.getElementById("user-comments-input")
 const newcommenttextvalue = newcommenttextelement.value 
 
 const usercommentslistelement = document.getElementById("user-comments-div")
 const commentelement = document.createElement("li");
 commentelement.innerText = newcommenttextvalue
 usercommentslistelement.appendChild(commentelement)
}

