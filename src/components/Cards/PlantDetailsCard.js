import React from 'react';

export default function PlantDetailsCard({ plant }) {
  return (
    <div className='card m-2 border-dark col-md-6' >
        <h1 className='card-title'>{plant.name}</h1>
      <img className='card-img-top' src={plant.image} alt='Card cap' />
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
