import React from 'react'
import img from '../assets/guns.png'

export default function Spec() {
  return (
    <div className='flex w-[1200px] mx-auto justify-between items-center h-[30rem] text-white'>
        <div className='w-[500px]'>
            <h1>Valorant - Spectrum Bundle</h1>
            <h3>Description</h3>
            <p>The Spectrum Collection is a collection of cosmetics in VALORANT. Its contents were initially available to be obtained when the collection was first released as a bundle in the Store. After this, only its weapon skins can be obtained whenever they become available in a player's daily Featured Store Offers.
The collection was created in collaboration with Zedd, who worked on its audio elements.</p>

            <button className='p-2 bg-black m-2 rounded-md'>Rent Asset</button>
            <button className='p-2 bg-black m-2 rounded-md'>Buy Now</button>
        </div>

        <div className=' w-60 h-60'>
            <img src={img} alt="" />
            <p>RENTING STARTS AT 0.0041 ETH</p>
            <p>BUY NOW FOR 0.071 ETH</p>

        </div>
    </div>
  )
}
