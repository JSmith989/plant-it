import React from 'react';
import { Link } from 'react-router-dom';

export default function GardenPlantsCard({ plant, removePlant }) {
  return (
    <div className='m-2 border-dark w-50 h-75' >
        <Link to={`/plants/${plant.firebaseKey}`}>
      <img className='gardenPlantsCard card-img-top rounded-pill border border-white' src={plant.image} alt='Card cap' />
        </Link>
      <div className='card-body'>
      <button
          className='btn btn-success'
          id={plant.firebaseKey}
          onClick={(e) => {
            removePlant(e);
          }}
        >
          Remove {plant.name}
        </button>
      </div>
    </div>
  );
}
