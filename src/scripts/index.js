import { render} from "./render.js";
import { handleModal, handleRegisterValue } from "./modal.js";
import { insertedValues} from "./valuesData.js";
import { filterCards } from "./filter.js";


export const handleDeleteCard = (array) =>{
    const buttonsTrash = document.querySelectorAll('.button-delete-card')

    buttonsTrash.forEach(button =>{
        button.addEventListener('click', (event) =>{
            const cardId = parseInt(event.target.dataset.cardId)
            
            const index = array.findIndex(card =>{
                return card.id === cardId
            })
            
            array.splice(index, 1)

            render(array)
        })
    })
}

export const handleFilterButtons = (array) =>{
    const buttons = document.querySelectorAll('.filter__button')
    const buttonAll = document.querySelector('.filter__all')
    
    buttons.forEach(button =>{
        button.addEventListener('click', (event) =>{
            
            const idButton = parseInt(event.target.dataset.buttonId)
            const cardFiltered = filterCards(array, idButton)
            console.log(cardFiltered)
            render(cardFiltered)
            
        })
    })

    buttonAll.addEventListener('click', () =>{
        if(buttonAll.textContent === 'Todos'){
            render(insertedValues)
        }
    })
}


render(insertedValues)
handleModal()
handleRegisterValue(insertedValues)

