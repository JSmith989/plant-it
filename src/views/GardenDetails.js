import React, { Component } from 'react';
import { getGardenById } from '../helpers/data/gardenData';
import GardenDetailsCard from '../components/Cards/GardenDetailsCard';

export default class Gardens extends Component {
  state = {
    gardens: [],
  };

  componentDidMount() {
    const gardenId = this.props.match.params.id;
    this.getAGarden(gardenId);
  }

  getAGarden = (gardenId) => {
    getGardenById(gardenId).then((response) => {
      this.setState({
        gardens: response,
      });
    });
  };

  render() {
    const { gardens } = this.state;
    const showGardens = () => (
     <GardenDetailsCard key={gardens.firebaseKey} garden={gardens} />
    );
    return (
      <div>
        <div className='gardens d-flex flex-wrap justify-content-center'>
          {showGardens()}
          </div>
      </div>
    );
  }
}
