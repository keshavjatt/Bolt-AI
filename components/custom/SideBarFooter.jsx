import { HelpCircle, LogOut, Settings, Wallet } from 'lucide-react';
import React from 'react';

function SideBarFooter() {
  const options=[
    {
      name: 'Settings',
      icons: Settings 
    },
    {
      name: 'Help Center',
      icons: HelpCircle 
    },
    {
      name: 'My Subscription',
      icons: Wallet 
    },
    {
      name: 'Sign Out',
      icons: LogOut 
    }
  ]

  return (
    <div>
        {options.map((option, index)=>{
          <div>
              
          </div>
        })}
    </div>
  )
}

export default SideBarFooter
