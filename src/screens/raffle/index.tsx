import { useState } from "react";
import { UseParticipantList } from "../../state/hooks/useParticipantList"
import { useResultRaffle } from "../../state/hooks/useResultRaffle";
import Card from "../../components/Card";

import './raffle.css';

export default function Raffle (){
    const [currentParticipant, setCurrentParticipant] = useState('')
    const [secretFriend, setSecretFriend] = useState('')

    const participants = UseParticipantList();

    const result = useResultRaffle()

    const draw = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(result.has(currentParticipant)) {
            setSecretFriend(result.get(currentParticipant)!)

            // Add Timeout to clear secretFriend after using
            setTimeout(() => {
                setSecretFriend('')
            }, 5000)
        }
    }


    return (
        <Card>
            <section className="raffle">
                <form onSubmit={draw}>
                    <select 
                        required 
                        name="participant" 
                        id="participant" 
                        placeholder="Selecione o seu nome"
                        value={currentParticipant}
                        onChange={e => setCurrentParticipant(e.target.value)}
                    >
                        <option>Selecione seu nome</option>
                        {participants.map(participant => <option key={participant}>{participant}</option>)}
                    </select>
                    <button className="button-raffle">{'Sortear'}</button>
                </form>
                {secretFriend && <p role="alert">{secretFriend}</p>}
            </section>
        </Card>
    )
}