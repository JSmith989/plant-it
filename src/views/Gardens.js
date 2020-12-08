import React, { Component } from 'react';
import { getAllGardens } from '../helpers/data/gardenData';
import GardensCard from '../components/Cards/GardensCard';
import Carousel from '../components/Carousel';

export default class Gardens extends Component {
  state = {
    gardens: [],
  }

  componentDidMount() {
    this.getGardens();
  }

  getGardens = () => {
    getAllGardens().then((response) => {
      this.setState({
        gardens: response,
      });
    });
  }

  render() {
    const { gardens } = this.state;
    const showGardens = () => (
      gardens.map((garden) => <GardensCard key={garden.firebaseKey} garden={garden} />)
    );
    return (
      <div>
        <h1 className="text-white">Gardens</h1>
        <Carousel gardens={gardens}>
          {showGardens()}
        </Carousel>
      </div>
    );
  }
}
