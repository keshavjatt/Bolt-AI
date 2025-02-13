"use client"
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function ChatView() {
    const {id}=useParams();
    const convex=useConvex();

    useEffect(()=>{
        id&&GetWorkspaceData();
    },[id])

    /** Used to Get Workspace data using Workspace ID **/
    const GetWorkspaceData=async()=>{
        const result=await convex.query(api.workspace.GetWorkspace, {
            workspaceId:id
        });
        console.log(result);
    }
  return (
    <div>ChatView</div>
  )
}

export default ChatView