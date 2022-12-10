import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../Components/Form'

    
    let button;
    let inputEmail;
            

        test ('comprobar que el formulario envie la información de email que fue recibida por el input', async () =>{
            render(<Form/>)
            button= screen.getByRole('button', {name: 'Send'})
                inputEmail = await screen.findByPlaceholderText("Email")
                fireEvent.change(inputEmail,{
                    target: {value: 'camilaagostini.03@hotmail.com' }
                })
            fireEvent.click(button)

            const respuestaFormulario = "Gracias, te contactaremos vía mail"
            expect(respuestaFormulario).toBeInTheDocument
            })