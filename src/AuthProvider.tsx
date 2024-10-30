import { ReactNode, useReducer } from "react"
import authReducer from "./reducers/authReducer"
import LoginContext from "./contexts/loginContext"

interface Props {
    children: ReactNode;
}


const AuthProvider = ({children}: Props) => {

    const [user, dispatch] = useReducer(authReducer, " ")


    return (
        <LoginContext.Provider value={{user, dispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

export default AuthProvider