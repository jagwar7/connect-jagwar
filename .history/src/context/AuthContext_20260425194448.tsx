"use client"
import { createContext, ReactNode, useContext, useState } from "react"


interface AuthContextType{
    user: any
    setUser: (name)
}

const AuthContext = createContext();

export default AuthProvider({children}:{children: ReactNode}){

    return (
        
    )
}