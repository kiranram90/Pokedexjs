//make all service calls

class PokemonService {
  //have a base url. so you don't have to worry about passing base ult

  constructor(endpoint) {
    //serves as initialize method. sets properties for instance of this class
    this.endpoint = endpoint;
  }
  // 1: Read/Index action
  getDetails() {
    fetch(`${this.endpoint}details`)
      .then((resp) => resp.json())
      .then((details) => {
        Detail.detailContainer.innerHTML = ""; // clear pokemon list
        // for each pokemon, display html
        for (const detail of details) {
          const d = new Detail(detail); //destructuring to assign property values
          d.domChanger();
        }
      });
  }

  createDetail() {
    const detail = {
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
      body: JSON.stringify(detail), //everything shared on the internet is string so we need to stringfy it
    };

    fetch(`${this.endpoint}/details`, configObject)
      .then((resp) => resp.json())
      .then((detail) => {
        const d = new Detail(detail);
        console.log(detail);
        d.domChanger();
      });
  }
  deletePokemon(id) {
    fetch(`${this.endpoint}/details/${id}`, {
      method: "DELETE", //convention to be all caps
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => console.log(resp))
      .then(() => {
        this.getDetails();
      });
  }
}
