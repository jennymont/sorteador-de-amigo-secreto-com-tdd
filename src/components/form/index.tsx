import React, { useRef, useState } from "react"
import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { UseMessageError } from "../../state/hooks/useMessageError";

import './form.css';

export default function Form() {
    const [name, setName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const add = useAddParticipant();
    const messageError = UseMessageError();

    const addParticipant = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setName('');
        add(name);
        inputRef.current?.focus();
    };

    return (
        <form onSubmit={addParticipant}>
            <div className="group-input-btn">
                <input 
                    ref={inputRef}
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Insira os nomes do participantes"
                />
                <button disabled={!name}>Adicionar</button>
            </div>
            {messageError && <p className="alert error" role="alert">{messageError}</p>}
        </form>
    )
}