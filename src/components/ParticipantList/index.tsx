import { UseParticipantList } from '../../state/hooks/useParticipantList';

export default function ParticipantList(){
    const participants: string[] = UseParticipantList();
    
    return (
        <ul>
            {participants.map(participants => <li key={participants}>{participants}</li>)}
        </ul>
    )
}