class Detail {
    static all = []; //class variable is referenced as static
    static detailContainer = document.getElementById('details-container');
    static detailForm = document.getElementById('form-container');
    constructor({id , name, elements, location, size, pokemon_id}){      //constructor is mimicing back end define properties 
        this.id = id
        this.name = name
        this.elements = elements
        this.location = location
        this.size = size
        this.pokemon_id = pokemon_id
        this.element = document.createElement('li') //creating its own element to show on index.html
        this.element.dataset.id =this.id
        this.element.id = 'detail-${this.id}'

        Detail.all.push(this)
}

detailHTML(){                   //creating the innerHteml for the element above. Since this is an instance that is being called on detail instance we use this and not worry about selecting it to change it.
    this.element.innerHTML += ` 
    <div>
        <h3>${this.name}</h3>
        <p>${this.location} - ${this.elements}</p>
        <p>${this.id} - ${this.size}</p>
    </div>
    <button id='delete-bttn'>Delete</button>
    <br>
    <br>
    `
    return this.element     //This function is just responsible for creating the innerhtml for the element that it is going in.
}

domChanger(){
    Detail.detailContainer.appendChild(this.detailHTML())
}

static renderForm(){
    Detail.detailForm.innerHTML += `
    <form id="new-pokemon-form">
      Name: <input type="text" id="name">
      Elements: <input type="text" id="elements">
      Location: <input type="text" id="location">
      Size: <input type="text" id="size">
      <input type="submit" id="create">
    <form>  
    
    `
}

}