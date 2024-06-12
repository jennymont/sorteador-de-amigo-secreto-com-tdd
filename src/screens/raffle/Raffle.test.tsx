import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { UseParticipantList } from '../../state/hooks/useParticipantList';
import Raffle from '.';
import { useResultRaffle } from '../../state/hooks/useResultRaffle';
import { act } from 'react-dom/test-utils';

jest.mock('../../state/hooks/useParticipantList', () => {
    return{
        UseParticipantList: jest.fn()
    }
})

jest.mock('../../state/hooks/useResultRaffle', () => {
    return{
        useResultRaffle: jest.fn()
    }
})


describe('A pagina de sorteio', () => {
    const participants = ['ana', 'joao', 'pedro']

    const result = new Map([
        ['ana', 'joao'],
        ['joao', 'pedro'],
        ['pedro', 'ana']

    ])

    beforeEach(() => {
        (UseParticipantList as jest.Mock).mockReturnValue(participants);
        (useResultRaffle as jest.Mock).mockReturnValue(result);

    })

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Raffle />
            </RecoilRoot>
        )
        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(participants.length + 1)
    })

    test('o amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Raffle />
            </RecoilRoot>
        )
        
        const select = screen.getByPlaceholderText('Selecione o seu nome')
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })

        const button = screen.getByRole('button')
        fireEvent.click(button)

        const secretFriend = screen.getByRole('alert')
        expect(secretFriend).toBeInTheDocument()
    })

    test('esconde o amigo secreto depois de 5 segundos', () => {
        jest.useFakeTimers();

        render (
            <RecoilRoot>
                <Raffle />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText('Selecione o seu nome')
        fireEvent.change(select, {
            target: {
                value: participants[1]
            }
        })

        const button = screen.getByRole('button')
        fireEvent.click(button)
        
        act(() => {
            jest.runAllTimers()
        })
    
        const alert = screen.queryByRole('alert')
        expect(alert).not.toBeInTheDocument()

    })
})