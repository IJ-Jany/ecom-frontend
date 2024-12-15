import { useContext } from "react";
import { Auth } from "../Components/Context";

const useAuth=() => {
    return useContext(Auth)
}

export default useAuth