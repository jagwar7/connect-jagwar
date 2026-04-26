"use client"
import { createContext, ReactNode, useContext, useState } from "react"


interface AuthContextType{
    user: {
        name: "",
        eamil: "",
        role: "",
        authType: "",
        imageURL: "",
    }
    setUser: (name: string, email:string, role: string, authType: string, imageURL:string){
        
    }
}

const AuthContext = createContext<AuthContextType>({user: undefined});

export default AuthProvider({children}:{children: ReactNode}){

    return (
        <AuthContext.Provider value={{user, setUser}}>
        </AuthContext.Provider>
    )
}