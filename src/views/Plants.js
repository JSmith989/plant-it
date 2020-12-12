import React, { Component } from 'react';
import { getAllPlants } from '../helpers/data/plantData';
import PlantsCard from '../components/Cards/PlantsCard';
import getUid from '../helpers/data/authData';
import { getUsersGardens } from '../helpers/data/gardenData';
import PlantsForm from '../components/Forms/PlantsForm';
import MyModal from '../components/MyModal';

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

     getGardens = () => {
       const currentUid = getUid();
       getUsersGardens(currentUid).then((response) => {
         this.setState({ gardens: response });
       });
     }

     render() {
       const { plants, gardens } = this.state;
       const showPlants = () => (
         plants.map((plant) => <PlantsCard key={plant.firebaseKey} plant={plant} />)
       );
       return (
      <div>
        <MyModal title={'Add Plant'} buttonLabel={'Add Plant'}>
          <PlantsForm plant={plants} gardens={gardens} onUpdate={this.getPlants}/>
            </MyModal>
        <h1 className="text-white">Plants</h1>
        <div className='plants d-flex flex-wrap justify-content-center'>
          {showPlants()}
          </div>
      </div>
       );
     }
}
