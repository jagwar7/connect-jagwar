"use client"
import { createContext, ReactNode, useContext, useState } from "react"


interface AuthContextType{
    user: any
    // setUser: (name: string)
}

const AuthContext = createContext<AuthContextType>()

export default AuthProvider({children}:{children: ReactNode}){

    return (
        
    )
}