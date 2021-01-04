import React from 'react';

export default function GardenDetailsCard({ garden, demolishGarden }) {
  return (
    <div>
    <div className='gardenCard m-2 border border-white'>
      <div className='card-body'>
        <h5 className='card-title text-white'>{garden.name}</h5>
        <p className='card-text text-white '>Sun Type: {garden.sunType}</p>
        <p className='card-text text-white '>Soil Type: {garden.soilType}</p>
        <p className='card-text text-white '>Zone: {garden.zone}</p>
      </div>
    </div>
        <button
          className='btn btn-danger'
          id={garden.firebaseKey}
          onClick={(e) => {
            demolishGarden(e);
          }}
        >
          Delete Garden
        </button>
    </div>
  );
}
