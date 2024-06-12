import { holdsDraw } from "./holdsDraw"

describe('dado um sorteio de amigo secreto', () => {

    test('cada participante não sorteie o proprio nome', () => {
        const participants = ['ana', 'catarina', 'juliana', 'pedro', 'jenny']

        const raffle = holdsDraw(participants)
        participants.forEach(participants => {
            const secreatFriend = raffle.get(participants)
            expect(secreatFriend).not.toEqual(participants)
        })
    })
})