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
    this.element.addEventListener("click", this.processClick);
    Detail.all.push(this);
  }

  processClick = () => {
    if (event.target.innerText === "Delete") {
      pokemonService.deletePokemon(this.id); //pokemonService is initilized as global variable and passing in object id to use in fetch.
    } // arrow function here because this is returning the button element
  };

  detailHTML() {
    //creating the innerHteml for the element above. Since this is an instance that is being called on detail instance we use this and not worry about selecting it to change it.
    this.element.innerHTML += ` 
    <div class="card">
        <div class="card-content">
            <div class="media">
              <div class="media-left">
                  <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
              </div>
              <div class="media-content">
                  <p class="title is-4">${this.name}</p>
                  <p class="subtitle is-6">${this.location} - ${this.elements}</p>
              </div>
            </div>

            <div class="content">
                <p>${this.id} - ${this.size}</p>
                <button id='delete-bttn'>Delete</button>
            </div>

            <div class="comments">
                <form>
                  <label>New Comment</label>
                  <input type="text" id="comment[text]" name="comment[text]"/>
                  <input type="hidden" id="comment[pokemon
                  _id]" name="comment[pokemon_id]" value="${this.id}"/>
                  <input type="submit" />
                </form>

                <ul class="comments-list">

                </ul>
            </div>
        </div>
    </div>
    <br>
    <br>
    `;
    const newCommentForm = this.element.querySelector("form");

    const newCommentTextInput = this.element.querySelector(
      "input[name='comment[text]']"
    );
    const newCommentPokemonID = this.element.querySelector(
      "input[name='comment[pokemon_id]']"
    );

    newCommentForm.onsubmit = async (event) => {
      event.preventDefault();

      const resp = await fetch("/comments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text: newCommentTextInput.value,
          pokemon_id: newCommentPokemonID.value,
        }),
      });

      console.log(resp);
    };

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
