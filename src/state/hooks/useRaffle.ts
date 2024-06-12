import { UseParticipantList } from "./useParticipantList"
import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";
import { holdsDraw } from "../helpers/holdsDraw";

export const useRaffle = () => {
    const participants = UseParticipantList()

    const setResult = useSetRecoilState(secretFriendResult);

    return () => {
        const result = holdsDraw(participants)
        setResult(result)
    }
}