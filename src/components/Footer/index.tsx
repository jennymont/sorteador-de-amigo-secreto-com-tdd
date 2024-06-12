import React from 'react';
import { UseParticipantList } from '../../state/hooks/useParticipantList';
import { useNavigate } from 'react-router-dom';

import './footer.css';
import { useRaffle } from '../../state/hooks/useRaffle';

export default function Footer(){
    const participants = UseParticipantList();
    const navigate = useNavigate();
    const raffle = useRaffle();

    const initial = () => {
        raffle()
        navigate('/raffle')
    }

    return(
        <footer className='footer-settings'>
            <button className='button-footer' disabled={participants.length < 3} onClick={initial}>{'Iniciar Brincadeira'}</button>
        </footer>
    )
}