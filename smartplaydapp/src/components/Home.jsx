import React from 'react'
import img from '../assets/Frame 10.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex items-center h-[80vh] w-[1200px] justify-between mx-auto'>
        <div className='mr-20'>
            <h1 className='text-white font-extrabold text-5xl mb-10'>PLAY YOUR GAME <br/> THE WAY YOU WANT</h1>
            <p className='text-white font-semibold text-2xl mb-9'>RENT ASSETS FOR YOUR FAVOURITE GAMES</p>
            <Link to='games'>
          <button className='bg-white p-2 text-bold rounded-xl'>Launch App</button>
        </Link>
        </div>

        <div>
            <img
        src={img} // Reference to the image in the "public" folder
        alt="My Image"
        width={450} // Set the width
        height={400} // Set the height
      />
        </div>
    </div>
  )
}