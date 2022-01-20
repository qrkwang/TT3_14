import React, { useContext, useState, useEffect } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    // function signup(email, password) {
    //      create Username and Password
    // }

    // useEffect(() => {
    //     // const unsubscribe =
    //     // when user is found, set current user to this 
    //     //(user => {setCurrentUser(user)})    
    // }, [])

    const value = {
        currentUser
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}