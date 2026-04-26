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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}:{children: ReactNode}){

    const [user, setUserState] = useState<User | null>(null);

    const setUser =(userData : User)=>{
        setUserState(userData);
    }

    const logOut=()=>{
        setUserState(null);
    }

    return (
        <AuthContext.Provider value={{user, setUser, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        
    }
}