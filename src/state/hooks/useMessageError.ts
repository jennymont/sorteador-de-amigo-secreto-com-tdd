import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const UseMessageError = () => {
    const message = useRecoilValue(erroState);

    return message;
}