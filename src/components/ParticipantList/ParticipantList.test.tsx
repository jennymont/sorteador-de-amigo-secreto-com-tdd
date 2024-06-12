import { render, screen } from "@testing-library/react";
import {RecoilRoot } from "recoil";
import ParticipantList from "./index";
import { UseParticipantList } from "../../state/hooks/useParticipantList";

jest.mock('../../state/hooks/useParticipantList', () => {
    return {
        UseParticipantList: jest.fn()
    }
})

describe('uma lista vazia de participantes', () => {
    beforeEach(() => {
        (UseParticipantList as jest.Mock).mockReturnValue([])
    })

    test('deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ParticipantList />
        </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listItem')
        expect(itens).toHaveLength(0);

    })
})

describe('uma lista preenchida de participantes', () => {
    const participants = ['Ana', 'Joao']

    beforeEach(() => {
        (UseParticipantList as jest.Mock).mockReturnValue(participants)
    })

    test('deve ser renderizada', () => {
        render(<RecoilRoot>
            <ParticipantList />
        </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listItem')
        expect(itens).toHaveLength(0);

    })
})