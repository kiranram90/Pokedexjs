//make all service calls


class PokemonService{               //have a base url. so you don't have to worry about passing base ult

    constructor(endpoint){          //serves as initialize method. sets properties for instance of this class
        this.endpoint = endpoint    
    }  
    // 1: Read/Index action
    getDetails(){
        fetch(`${this.endpoint}/details`)
        .then(resp => resp.json())
        .then(details  => {
            for (const detail of details){
                const d = new details(detail) //destructuring to assign property values
                d.domChanger()
            }
        })
    }

    
        })

    }    
}