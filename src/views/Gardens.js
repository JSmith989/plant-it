import React, { Component } from 'react';
import { getAllGardens } from '../helpers/data/gardenData';
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
    return (
      <div>
        <h1 className="text-white">Gardens</h1>
        <Carousel gardens={gardens}/>
      </div>
    );
  }
}
