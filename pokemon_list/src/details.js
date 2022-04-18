class Detail {
  static all = []; //class variable is referenced as static
  static detailContainer = document.getElementById("details-container");
  static detailForm = document.getElementById("form-container");

  constructor({ id, name, elements, location, size, pokemon_id }) {
    //constructor is mimicing back end define properties
    this.id = id;
    this.name = name;
    this.elements = elements;
    this.location = location;
    this.size = size;
    this.pokemon_id = pokemon_id;
    this.element = document.createElement("div"); //creating its own element to show on index.html
    this.element.dataset.id = this.id;
    this.element.id = "detail-${this.id}";

    Detail.all.push(this);
  }

  
    return this.element; //This function is just responsible for creating the innerhtml for the element that it is going in.
  }

  domChanger() {
    Detail.detailContainer.appendChild(this.detailHTML());
  }

  static renderForm() {
    Detail.detailForm.innerHTML += `
  
    <div class="notification is-primary">
    <form id="new-pokemon-form" class="box">
    <div class="field">
    <p class="title is-1"> Pokedex </p>

    <br>
    <br>
    Name:
    <input class="input is-primary" input type="text" placeholder="Enter Name" id="name">
  
      Elements:
      <input class="input is-primary" input type="text" placeholder="Enter Element" id="elements">

      Location: 
      <input class="input is-primary" input type="text" placeholder="Enter Location" id="location">

      Size:
      <input class="input is-primary" input type="text" placeholder="Enter Size - Large/Medium/Small" id="size">

      <input type="submit" id="create" class="button is-dark">
    <form>  
    </div>
   
    `;
  }
}
