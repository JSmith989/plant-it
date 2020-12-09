import React, { Component } from 'react';
import { getGardenById } from '../helpers/data/gardenData';
import GardenDetailsCard from '../components/Cards/GardenDetailsCard';
import MyModal from '../components/MyModal';
import GardenForm from '../components/Forms/GardenForm';

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
        <MyModal title={'Update'} buttonLabel={'Update'}>
        { Object.keys(gardens).length && <GardenForm garden={gardens} onUpdate={this.getAGarden} />}
        </MyModal>
        <div className='gardens d-flex flex-wrap justify-content-center'>
          {showGardens()}
          </div>
      </div>
    );
  }
}
