import React, { Component } from 'react';
import { getPlantById, deletePlant, deleteKeyValue } from '../helpers/data/plantData';
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

  killPlant = (e) => {
    deletePlant(e.target.id)
      .then(() => {
        deleteKeyValue(e.target.id);
      });
    setTimeout(() => {
      this.props.history.push('/plants');
    }, 500);
  }

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
        <button
          className='btn btn-danger'
          id={plants.firebaseKey}
          onClick={(e) => {
            this.killPlant(e);
          }}
        >
          Delete
        </button>
        <div className='plants d-flex flex-wrap justify-content-center'>
          {showPlants()}
          </div>
      </div>
    );
  }
}
