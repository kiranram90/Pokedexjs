// any initializations of the application
//any global varibales
const base_url = "http://127.0.0.1:3000/"
const pokemonService = new PokemonService(base_url) //you need a new instance because when you make fetch calls, they are new instances.
Detail.detailForm.addEventListener("submit", processSubmit)
//detailService.getDetails()  
// any reading or fetching data 
Detail.renderForm()

function processSubmit(){    //function the data from the form and submit post request
    event.preventDefault() //forms have default behavior of refresh
    pokemonService.createDetail()
    event.target.reset() //clears the form
}