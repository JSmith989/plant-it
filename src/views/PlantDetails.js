import React, { Component } from 'react';
import { getPlantById } from '../helpers/data/plantData';
import PlantDetailsCard from '../components/Cards/PlantDetailsCard';
import MyModal from '../components/MyModal';
import PlantsForm from '../components/Forms/PlantsForm';

export default class Plants extends Component {
  state = {
    plants: [],
  };

  componentDidMount() {
    const plantId = this.props.match.params.id;
    this.getAPlant(plantId);
  }

  getAPlant = (plantId) => {
    getPlantById(plantId).then((response) => {
      this.setState({
        plants: response,
      });
    });
  };

  render() {
    const { plants } = this.state;
    const showPlants = () => (
     <PlantDetailsCard key={plants.firebaseKey} plant={plants} />
    );
    return (
      <div>
        <MyModal title={'Update'} buttonLabel={'Update'}>
        { Object.keys(plants).length && <PlantsForm plant={plants} onUpdate={this.getAPlant} />}
        </MyModal>
        <div className='plants d-flex flex-wrap justify-content-center'>
          {showPlants()}
          </div>
      </div>
    );
  }
}
