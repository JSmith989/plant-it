import React, { Component } from 'react';
import {
  getGardenById,
  deleteGarden,
  getGardensPlants,
  deleteGardenTable,
} from '../helpers/data/gardenData';
import { getPlantById } from '../helpers/data/plantData';
import GardenDetailsCard from '../components/Cards/GardenDetailsCard';
import PlantsCard from '../components/Cards/PlantsCard';
import MyModal from '../components/MyModal';
import GardenForm from '../components/Forms/GardenForm';

export default class Gardens extends Component {
  state = {
    gardens: [],
    plants: [],
  };

  componentDidMount() {
    const gardenId = this.props.match.params.id;
    this.getAGarden(gardenId);
    this.getPlantsInGarden(gardenId).then((response) => (
      this.setState({ plants: response })
    ));
  }

  getAGarden = (gardenId) => {
    getGardenById(gardenId).then((response) => {
      this.setState({
        gardens: response,
      });
    });
  };

  getPlantsInGarden = (gardenId) => (
    getGardensPlants(gardenId).then((response) => {
      const plantArray = [];
      response.forEach((obj) => {
        plantArray.push(getPlantById(obj.plantId));
      });

      return Promise.all([...plantArray]);
    })
  )

  demolishGarden = (e) => {
    deleteGarden(e.target.id)
      .then(() => {
        deleteGardenTable(e.target.id);
      });
    setTimeout(() => {
      this.props.history.push('/gardens');
    }, 500);
  }

  render() {
    const { gardens, plants } = this.state;
    const gardenDetails = () => (
     <GardenDetailsCard key={gardens.firebaseKey} garden={gardens} demolishGarden={this.demolishGarden}/>
    );
    const showPlants = () => (
      plants.map((plant) => <PlantsCard key={plant.firebaseKey} plant={plant} />)
    );
    return (
      <div>
        <MyModal title={'Update'} buttonLabel={'Update'}>
        { Object.keys(gardens).length && <GardenForm garden={gardens} onUpdate={this.getAGarden} />}
        </MyModal>
        <div className='d-flex justify-content-center'>
          {gardenDetails()}
          </div>
        <div className='gardenPlants d-flex flex-wrap justify-content-center'>
          {showPlants()}
          </div>
      </div>
    );
  }
}
