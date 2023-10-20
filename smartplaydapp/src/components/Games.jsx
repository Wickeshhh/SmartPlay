import React from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3  from "../assets/img3.png"
import img4 from "../assets/img4.png"
import { Link } from 'react-router-dom';

export default function Games() {
  return (
    <div>
        <h1 className='text-center font-bold text-2xl text-white p-5'>Choose the Game</h1>
        <div>
            <div className='flex'>
              <Link to="valorant"><img className="w-[20rem] h-[20rem]" src={img1} alt="" srcset="" /></Link>
              <Link to="valorant"><img className="w-[20rem] h-[20rem]" src={img2} alt="" srcset="" /></Link>
              <Link to="valorant"><img className="w-[20rem] h-[20rem]" src={img3} alt="" srcset="" /></Link>
              <Link to="valorant"><img className="w-[20rem] h-[20rem]" src={img4} alt="" srcset="" /></Link>
                
            </div>
        </div>
      
    </div>
  )
}
