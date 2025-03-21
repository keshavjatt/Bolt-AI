"use client"
import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from '@/components/custom/Header'
import { MessagesContext } from '@/context/MessagesContext'
import { UserDetailContext } from '@/context/UserDetailsContext'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import AppSideBar from '@/components/custom/AppSideBar'
import { SidebarProvider } from '@/components/ui/sidebar'

function Provider({children}) {
  const [messages, setMessages] = useState();
  const [userDetail, setUserDetail]=useState();
  const convex=useConvex();

  useEffect(()=>{
    IsAuthenticated();
  },[])
  
  const IsAuthenticated=async()=>{
    if(typeof window!==undefined)
    {
        const user=JSON.parse(localStorage.getItem('user'))
        //Fetch from Database 
        const result=await convex.query(api.users.GetUser,{
          email:user?.email
        })
        setUserDetail(result);
        console.log(result);
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
                <SidebarProvider defaultOpen={false}>
                  <AppSideBar /> 
                  {children}
                </SidebarProvider>
              </NextThemesProvider>
            </MessagesContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </div>
  )
}

export default Provider