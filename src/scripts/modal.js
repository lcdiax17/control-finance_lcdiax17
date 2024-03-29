import { render } from "./render.js"

export const handleModal = () =>{
    const modalController = document.querySelector('.modal__controller')
    const buttonOpenModal = document.querySelector('.open-modal')

    buttonOpenModal.addEventListener('click', () =>{

        modalController.showModal()

        closeModal()
    })

    const closeModal = () =>{
        const modalController = document.querySelector('.modal__controller')
        const buttonCloseModal = document.querySelector('.close__modal')
        const secondButtonCloseModal = document.querySelector('.close__modal--diferent')


        buttonCloseModal.addEventListener('click', (event) =>{
            event.preventDefault()
            modalController.close()
        })

        secondButtonCloseModal.addEventListener('click', () =>{
            modalController.close()
        })
    }
}

export const handleRegisterValue = (array) =>{
    const buttonInsert = document.querySelector('.add')
    const inputValue = document.querySelector('.input-value')


    inputValue.addEventListener('keypress', (event) =>{

        if(!checkInputChar(event)){
            event.preventDefault()
        }
    })

    buttonInsert.addEventListener('click', (event) =>{
        let newValue = {}

        event.preventDefault()


        const inputRadio = document.querySelector("input[type='radio']:checked")
        
        newValue[inputValue.name] = parseInt(inputValue.value)
        newValue[inputRadio.name] = parseInt(inputRadio.value)

        newValue.id = array.length + 1
        array.unshift(newValue)
        render(array)
    })
    
}

const checkInputChar = (event) =>{

    const character = String.fromCharCode(event.keyCode)

    const characterPattern = ('[0-9]')

    if(character.match(characterPattern)){
        return true
    }
}