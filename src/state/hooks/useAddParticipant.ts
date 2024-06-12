import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listParticipantsState } from "../atom"

export const useAddParticipant = () => {
    const setList = useSetRecoilState(listParticipantsState)
    const list = useRecoilValue(listParticipantsState)

    const setError = useSetRecoilState(erroState)

    return (participantName: string) => {
        if(list.includes(participantName)){
            setError('nomes duplicados não são permitidos')
            setTimeout(() => {
                setError('')
            },5000)
            return
        }

        return setList(list => [...list, participantName])
    }
}