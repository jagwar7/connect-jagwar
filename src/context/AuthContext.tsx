"use client"
import { createContext, ReactNode, useContext, useState } from "react"

export interface User {
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

    const setUser =(userData : any)=>{
        console.log("Setting user data in context : ", userData);
        setUserState({
            name: userData.name,
            email: userData.email,
            role: userData.role,
            authType: userData.authProvider,
            imageURL: userData.avatar
        });

        console.log("User state after setting : ", user);
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
        throw new Error("useAuth must be within AuthProvider wrapper");
    }

    return context;
}