import React, { Component } from 'react';
import { getAllPlants } from '../helpers/data/plantData';
import PlantsCard from '../components/Cards/PlantsCard';

export default class Plants extends Component {
  state = {
    plants: [],
  };

  componentDidMount() {
    this.getPlants();
  }

  getPlants = () => {
    getAllPlants().then((response) => {
      this.setState({
        plants: response,
      });
    });
  };

  render() {
    const { plants } = this.state;
    const showPlants = () => (
      plants.map((plant) => <PlantsCard key={plant.firebaseKey} plant={plant} />)
    );
    return (
      <div>
        <h1 className="text-white">Plants</h1>
        <div className='plants d-flex flex-wrap justify-content-center'>
          {showPlants()}
          </div>
      </div>
    );
  }
}
