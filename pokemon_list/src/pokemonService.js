//make all service calls

class PokemonService {
  //have a base url. so you don't have to worry about passing base ult

  constructor(endpoint) {
    //serves as initialize method. sets properties for instance of this class
    this.endpoint = endpoint;
  }
  // 1: Read/Index action
  getPokemon() {
    fetch(`${this.endpoint}/pokemons`)
      .then((resp) => resp.json())
      .then((allPokemonJSON) => {
        Pokemon.pokemonContainer.innerHTML = ""; // clear pokemon list
        // for each pokemon, display html
        for (const pokemonJSON of allPokemonJSON) {
          const pokemon = new Pokemon(pokemonJSON); //destructuring to assign property values
          pokemon.domChanger();
        }
      });
  }

  createPokemon() {
    const pokemon = {
      name: document.getElementById("name").value,
      elements: document.getElementById("elements").value,
      size: document.getElementById("size").value,
      location: document.getElementById("location").value,
      //pokemon id needs to be set
    };
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon), //everything shared on the internet is string so we need to stringfy it
    };

    fetch(`${this.endpoint}/pokemons`, configObject)
      .then((resp) => resp.json())
      .then((pokemonJSON) => {
        const pokemon = new Pokemon(pokemonJSON);
        console.log(pokemon);
        pokemon.domChanger();
      });
  }

  createComment(pokemon_id,text) {
    //can use this.endpoint here but it would mean more coding.
    const resp = fetch(`${this.endpoint}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        pokemon_id: pokemon_id,
      }),
    })
      .then((resp) => resp.json())
      .then((respJSON) => {
        this.getPokemon();
      });
  }

  deletePokemon(id) {
    fetch(`${this.endpoint}/pokemons/${id}`, {
      method: "DELETE", //convention to be all caps
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => console.log(resp))
      .then(() => {
        this.getPokemon();
      });
  }
}
