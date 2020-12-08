import React from 'react';

export default function GardenDetailsCard({ garden }) {
  return (
    <div className='m-2 border-dark w-50 h-75' >
      <div className='card-body'>
        <h5 className='card-title text-white'>{garden.name}</h5>
        <p className='card-text text-white '>Sun Type: {garden.sunType}</p>
        <p className='card-text text-white '>Soil Type: {garden.soilType}</p>
        <p className='card-text text-white '>Zone: {garden.zone}</p>
      </div>
    </div>
  );
}
