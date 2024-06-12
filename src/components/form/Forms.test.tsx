import {fireEvent, render, screen} from '@testing-library/react'
import Form from './index';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';


describe('o comportamento do formulário', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
    
        const input = screen.getByPlaceholderText('Insira os nomes do participantes');
        const button = screen.getByRole('button')
    
        expect(input).toBeInTheDocument();
        expect(button).toBeDisabled();
    })
    
    test('adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
    
        const input = screen.getByPlaceholderText('Insira os nomes do participantes');
        const button = screen.getByRole('button')
    
        //inserir valor no input
        fireEvent.change(input, {
            target: {
                value: 'Pedro Henrique'
            }
        })
        //clicar no botão submeter
        fireEvent.click(button)
        //garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus()
        //garantir que  o input não tenha um valot
        expect(input).toHaveValue("")
    
    })
    
    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
    
        const input = screen.getByPlaceholderText('Insira os nomes do participantes');
        const button = screen.getByRole('button')
    
        fireEvent.change(input, {
            target: {
                value: 'Pedro Henrique'
            }
        })
        fireEvent.click(button)
    
        fireEvent.change(input, {
            target: {
                value: 'Pedro Henrique'
            }
        })
        fireEvent.click(button)
    
        const error = screen.getByRole('alert')
    
        expect(error.textContent).toBe('nomes duplicados não são permitidos')
    })
    
    test('a mensagem de erro deve sumuir apos os timers', () => {
        jest.useFakeTimers()
        render(<RecoilRoot><Form /></RecoilRoot>)
    
        const input = screen.getByPlaceholderText('Insira os nomes do participantes');
        const button = screen.getByRole('button')
    
        fireEvent.change(input, {
            target: {
                value: 'Pedro Henrique'
            }
        })
        fireEvent.click(button)
    
        fireEvent.change(input, {
            target: {
                value: 'Pedro Henrique'
            }
        })
        fireEvent.click(button)
    
        let messageError: HTMLElement | null = screen.getByRole('alert')
        expect(messageError).toBeInTheDocument()
    
        //ESPERAR 3S 
    
        act(() => {
            jest.runAllTimers()
        })
    
    
        messageError = screen.queryByRole('alert')
        expect(messageError).toBeNull()
    })

})