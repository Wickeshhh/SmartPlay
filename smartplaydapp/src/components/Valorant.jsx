import React from 'react'
import img1 from '../assets/gun1.png'
import img2 from '../assets/gun2.png'
import img3 from '../assets/gun3.png'
import { Link } from 'react-router-dom'


export default function Valorant() {
  return (
    <div>
        <h1 className='text-center font-bold text-3xl text-white p-5'>Showing Assets for <br/> Valorant</h1>
        <div className='flex items-center justify-center mx-auto'>
            <Link to="spec"><img src={img1} alt="" /></Link>
            <Link to="spec"><img src={img2} alt="" /></Link>
            <Link to="spec"><img src={img3} alt="" /></Link>
        </div>
    </div>
  )
}
