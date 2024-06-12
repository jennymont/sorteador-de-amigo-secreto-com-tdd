import { useRecoilValue } from 'recoil';
import { secretFriendResult } from '../atom';

export const useResultRaffle = () => {
    return useRecoilValue(secretFriendResult)
}