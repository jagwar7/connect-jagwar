"use client"
import { createContext, ReactNode, useContext, useState } from "react"

interface User {
  name: string;
  email: string; 
  role: string;
  authType: string;
  imageURL: string;
}


interface AuthContextType{
    user: User | null;

    setUser: (userData:User) => void;
    logOut: ()=>void;
}

const AuthContext = createContext<AuthContextType>({user: undefined});

export default AuthProvider({children}:{children: ReactNode}){

    const [user, setUserState] = useState<User | null>(null);

    const setUser

    return (
        <AuthContext.Provider value={{user, setUser}}>
        </AuthContext.Provider>
    )
}