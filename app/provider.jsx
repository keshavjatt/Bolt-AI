"use client"
import React, { useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from '@/components/custom/Header'
import { MessagesContext } from '@/context/MessagesContext'
import { UserDetailContext } from '@/context/UserDetailsContext'
import { GoogleOAuthProvider } from '@react-oauth/google'

function Provider({children}) {
  const [messages, setMessages] = useState();
  const [userDetail, setUserDetail]=useState();
  
  const IsAuthenticated=()=>{
    if(typeof window!==undefined)
    {
        const user=JSON.parse(localStorage.getItem('user')) 
    }
  }
  
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}>
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
          <MessagesContext.Provider value={{messages, setMessages}}>
              <NextThemesProvider
                  attribute="class"
                  defaultTheme="dark"
                  enableSystem
                  disableTransitionOnChange
              >
                <Header />
                  {children}
              </NextThemesProvider>
            </MessagesContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </div>
  )
}

export default Provider