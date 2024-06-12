import { useRecoilValue } from "recoil"
import {listParticipantsState } from "../atom"

export const UseParticipantList = () => {
    return useRecoilValue(listParticipantsState)
}