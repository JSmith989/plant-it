import React from 'react';
import { Link } from 'react-router-dom';

export default function PlantsCard({ plant }) {
  return (
    <div className='m-2 border-dark w-50 h-75' >
        <Link to={`/plants/${plant.firebaseKey}`}>
      <img className='card-img-top rounded-pill border border-white' src={plant.image} alt='Card cap' />
        </Link>
      <div className='card-body'>
        <h5 className='card-title text-white '>{plant.name}</h5>
      </div>
    </div>
  );
}
