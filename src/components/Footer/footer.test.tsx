import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Footer from '.';
import { UseParticipantList } from '../../state/hooks/useParticipantList';

jest.mock('../../state/hooks/useParticipantList', () => {
    return {
        UseParticipantList: jest.fn()
    }
})

const mockNavigate = jest.fn()
const mockSort = jest.fn()

jest.mock('react-router-dom', () => {
    return{
        useNavigate: () => mockNavigate
    }
})

jest.mock('../../state/hooks/useRaffle.ts', () => {
    return{
        useRaffle: () => mockSort
    }
})

describe('Quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (UseParticipantList as jest.Mock).mockReturnValue([])
    })

    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)


        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})

describe('Quando existem participantes suficientes', () => {
    beforeEach(() => {
        (UseParticipantList as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina'])
    })

    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)

        const button = screen.getByRole('button')
        expect(button).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockNavigate).toHaveBeenCalled()
        expect(mockNavigate).toHaveBeenCalledWith('/raffle')
        //SORTEIO FOI CHAMADO PELO MENOS UMA VEZ
        expect(mockSort).toHaveBeenCalledTimes(1)
    })
})
