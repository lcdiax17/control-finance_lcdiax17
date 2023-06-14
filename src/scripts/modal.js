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
    
    let newValue = {}
    
    buttonInsert.addEventListener('click', (event) =>{
        event.preventDefault()
        const inputRadio = document.querySelector("input[type='radio']:checked")
        
        newValue[inputValue.name] = parseInt(inputValue.value)
        newValue[inputRadio.name] = parseInt(inputRadio.value)

        
        newValue.id = array.length + 1
        array.push(newValue)
        console.log(newValue)
        render(array)
    })
    
}

