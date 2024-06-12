import { atom } from "recoil";

export const listParticipantsState = atom<string[]>({
    key: 'listParticipantsState',
    default: []
})

export const erroState = atom<string>({
    key: 'errorState',
    default: ''
})

export const secretFriendResult = atom<Map<string, string>>({
    key: 'secretFriendResult',
    default: new Map()
})