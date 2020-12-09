import React, { Component } from 'react';
import { getUsersGardens } from '../helpers/data/gardenData';
import Carousel from '../components/Carousel';
import MyModal from '../components/MyModal';
import getUid from '../helpers/data/authData';
import GardenForm from '../components/Forms/GardenForm';

export default class Gardens extends Component {
  state = {
    gardens: [],
  };

  componentDidMount() {
    this.getGardens();
  }

  getGardens = () => {
    const currentUserId = getUid();
    getUsersGardens(currentUserId).then((response) => {
      this.setState({
        gardens: response,
      });
    });
  };

  render() {
    const { gardens } = this.state;
    return (
      <div>
        <MyModal title={'Add Garden'} buttonLabel={'Add Garden'}>
          <GardenForm onUpdate={this.getGardens} garden={gardens} />
        </MyModal>
        <Carousel gardens={gardens} />
      </div>
    );
  }
}
