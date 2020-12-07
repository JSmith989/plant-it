import React from 'react';
import { Link } from 'react-router-dom';

export default function GardensCard({ garden }) {
  return (
    <div className='m-2 border-dark w-50 h-75' >
        <Link to={`/gardens/${garden.firebaseKey}`}>
      <img className='card-img-top border border-white' src={garden.image} alt='Card cap' />
        </Link>
      <div className='card-body'>
        <h5 className='card-title text-white '>{garden.name}</h5>
      </div>
    </div>
  );
}
