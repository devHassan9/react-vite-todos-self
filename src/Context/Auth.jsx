import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

const Auth = createContext()
const initialState = { isAuth: false, user: {} }


const AuthContext = ({ children }) => {

    const [state, setState] = useState(initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)

    const readProfile = () => {

        const user = { uid: "123", email: "Hassangill2005@gmail.com", name: "Zeeshan Hassan" }
        // setState({ isAuth: true, user })
        setTimeout(() => {
            setIsAppLoading(false)
        }, 1000);
    }

    useEffect(() => { readProfile() }, [])

    const handleLogout = () => {
        setState(initialState)
    }

    return (

        <Auth.Provider value={{ ...state, isAppLoading, handleLogout }} >
            {children}
        </Auth.Provider>

    )
}

export default AuthContext

export const useAuth = () => useContext(Auth)