import React from 'react'
import img from '../assets/Frame 10.png'

export default function Home() {
  return (
    <div className='flex items-center h-[80vh] w-[1300px] justify-between mx-auto'>
        <div className='text'>
            <h1 className='text-white font-extrabold text-6xl mb-10'>PLAY YOUR GAME <br/> THE WAY YOU WANT</h1>
            <p className='text-white font-semibold text-2xl'>RENT ASSETS FOR YOUR FAVOURITE GAMES</p>
        </div>

        <div>
            <img
        src={img} // Reference to the image in the "public" folder
        alt="My Image"
        width={500} // Set the width
        height={450} // Set the height
      />
        </div>
    </div>
  )
}