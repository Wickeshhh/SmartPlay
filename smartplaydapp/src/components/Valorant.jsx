import React from 'react';
import img1 from '../assets/gun1.png'
import img2 from '../assets/gun2.png'
import img3 from '../assets/gun3.png'
import { Link } from 'react-router-dom';

const image = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
];

export default function Valorant() {
  return (
    <div>
      <h1 className='text-center font-bold text-3xl text-white p-5'>Showing Assets for Valorant</h1>
      <div className='flex items-center justify-center mx-auto'>
        {image.map((image) => (
          <Link to="spec" key={image.id}>
            <img className="transform transition duration-1000 hover:scale-110" src={image.src} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}
