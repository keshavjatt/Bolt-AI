"use client"
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailsContext';
import { api } from '@/convex/_generated/api';
import Colors from '@/data/Colors';
import { useConvex } from 'convex/react';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

function ChatView() {
    const {id} = useParams();
    const convex = useConvex();
    const {userDetail, setUserDetail}=useContext(UserDetailContext);
    const {messages, setMessages} = useContext(MessagesContext);  // yaha setMessages use karo

    useEffect(()=>{
        id && GetWorkspaceData();
    },[id])

    /** Used to Get Workspace data using Workspace ID **/
    const GetWorkspaceData = async () => {
        const result = await convex.query(api.workspace.GetWorkspace, {
            workspaceId: id
        });
        setMessages(result?.messages)  // Correct function use karo
        console.log(result);
    }

    return (
        <div>
            <div>
                {messages?.map((msg,index)=>(
                  <div key={index} 
                  className='p-3 rounded-lg mb-2'
                  style={{
                    backgroundColor:Colors.CHAT_BACKGROUND
                  }}>
                      {msg?.role=='user'&&
                      <Image src={userDetail?.picture} alt='userImage' width={35} height={35} className='rounded-full'/>}
                      <h2>{msg.content}</h2>
                  </div>
                ))}
            </div>
        </div>
    )
}

export default ChatView;
