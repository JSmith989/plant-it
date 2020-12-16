import React from 'react';

export default function PlantDetailsCard({ plant }) {
  return (
    <div className='card plantDetails m-2 border-light col-md-6' >
        <h1 className='card-title m-2'>{plant.name}</h1>
      <img className='card-img' src={plant.image} alt='Card cap' />
      <div className='card-body'>
            <p className='card-text'>Zone: {plant.zone}</p>
            <p className='card-text'>Germination: {plant.germination}</p>
            <p className='card-text'>Spacing: {plant.spacing}</p>
            <p className='card-text'>Depth: {plant.depth}</p>
            <p className='card-text'>Notes: {plant.notes}</p>
            <p className='card-text'>Harvesting: {plant.harvesting}</p>
      </div>
    </div>
  );
}
