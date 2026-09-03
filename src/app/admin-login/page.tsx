"use client"

import { useAuth } from '@/context/AuthContext'
import FlashAuthClient from 'flashauthbyjagwar/dist/FlashAuthClient';
import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';

const page = () => {

    const {user, setUser} = useAuth();
    const [client, setClient] = useState<any>(null);
    
    const flashauthPublicKey = process.env.NEXT_PUBLIC_FLASHAUTH_PUBLIC_KEY;
    
    useEffect(()=>{
        console.log("FlashAuth Public Key: ", flashauthPublicKey);
        const flashauthClient = new FlashAuthClient(flashauthPublicKey as string);
        if(!flashauthClient){
            window.alert("Failed to initialize FlashAuth");
        return;
        }

        setClient(flashauthClient);
    },[]);


    const handleGoogleSignIn=async()=>{
        if(!client) {
          throw new Error("FlashAuth havent initialized");
        }
    
        try {
          let userData = await client.SignInWithGoogle();
          userData = jwtDecode(userData);
    
          setUser(userData);
          
        } catch (error) {
          console.log(error)
        }
      }


  return (
    <div className="flex flex-col w-screen h-screen">
        <div className="flex justify-center items-center h-14 w-full bg-sky-900 font-semibold text-white">
            CONTROL PANEL
        </div>
        <div className='flex flex-col justify-center items-center h-full w-full bg-slate-900 ' >
            <div className='flex flex-col pb-6'>
                <h2>Hello {user?.name || 'User'}</h2>
                <h2>Role : {user?.role || 'User'}</h2>
            </div>
            <button className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm tracking-wide shadow-sm hover:bg-blue-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleGoogleSignIn}
            >
            SIGN IN WITH ADMIN EMAIL
            </button>
        </div>
    </div>
  )
}

export default page