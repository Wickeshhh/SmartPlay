import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  return (
    <div className=' bg-[rgb(59,8,83)] h-20 flex items-center justify-around'>
    <div className='w-[80vw]'>
        <h1 className='text-white font-bold text-3xl ml-20'>SMARTPLAY</h1>
    </div>

    <div className='mr-10'>
        < ConnectButton/>
    </div>
           
    </div>
  )
}