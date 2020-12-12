import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import {
  createPlant,
  createGardenPlant,
  deleteKeyValue,
  updatePlant,
} from '../../helpers/data/plantData';
import getUid from '../../helpers/data/authData';
import GardenDropdown from '../GardenDropdown';
// import { getUsersGardens } from '../../helpers/data/gardenData';

export default class PlantsForm extends Component {
  state = {
    depth: this.props.plant?.depth || '',
    firebaseKey: this.props.plant?.firebaseKey || '',
    germination: this.props.plant?.germination || '',
    harvesting: this.props.plant?.harvesting || '',
    image: this.props.plant?.image || '',
    name: this.props.plant?.name || '',
    notes: this.props.plant?.notes || '',
    spacing: this.props.plant?.spacing || '',
    userId: this.props.plant?.userId || '',
    zone: this.props.plant?.zone || '',
    gardenId: this.props.plant?.gardenId || '',
  };

  componentDidMount() {
    const userId = getUid();
    this.setState({
      userId,
    });
  }

  //   getGardens = () => {
  //     const currentUid = getUid();
  //     getUsersGardens(currentUid).then((response) => {
  //       this.setState({ gardens: response });
  //     });
  //   }

  handleChange = (e) => {
    if (e.target.name === 'filename') {
      this.setState({ image: '' });

      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`plant-it/${this.state.userId}/${Date.now()}${e.target.files[0].name}`);

      imageRef.put(e.target.files[0]).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((image) => {
          this.setState({ image });
        });
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.firebaseKey === '') {
      const newPlant = {
        depth: this.state.depth,
        firebaseKey: this.state.firebaseKey,
        germination: this.state.germination,
        harvesting: this.state.harvesting,
        image: this.state.image,
        name: this.state.name,
        notes: this.state.notes,
        spacing: this.state.spacing,
        userId: this.state.userId,
        zone: this.state.zone,
      };
      createPlant(newPlant)
        .then((response) => {
          const joinTableObject = {
            gardenId: this.state.gardenId,
            plantId: response.data.firebaseKey,
            userId: this.state.userId,
          };
          if (this.state.gardenId !== '') {
            createGardenPlant(joinTableObject);
          }
        }).then(() => {
          this.props.onUpdate(this.props.gardenId);
        });
    } else {
      const plantUpdate = {
        depth: this.state.depth,
        firebaseKey: this.state.firebaseKey,
        germination: this.state.germination,
        harvesting: this.state.harvesting,
        image: this.state.image,
        name: this.state.name,
        notes: this.state.notes,
        spacing: this.state.spacing,
        userId: this.state.userId,
        zone: this.state.zone,
      };
      deleteKeyValue(this.state.firebaseKey);
      updatePlant(plantUpdate)
        .then(() => {
          const updatedTable = {
            gardenId: this.state.gardenId,
            plantId: this.state.firebaseKey,
            userId: this.state.userId,
          };
          if (this.state.gardenId !== '') {
            createGardenPlant(updatedTable);
          }
          this.props.onUpdate(this.props.plant.firebaseKey);
        });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
          <GardenDropdown onChange={this.handleChange} />
        <FormGroup>
          <Label for='plantName'>Name</Label>
          <Input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='Plant Name'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='plantZone'>Zone</Label>
          <Input
            type='text'
            name='zone'
            value={this.state.zone}
            onChange={this.handleChange}
            placeholder='Plant Zone'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='germination'>Germination</Label>
          <Input
            type='text'
            name='germination'
            value={this.state.germination}
            onChange={this.handleChange}
            placeholder='Germination'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='spacing'>Spacing</Label>
          <Input
            type='text'
            name='spacing'
            value={this.state.spacing}
            onChange={this.handleChange}
            placeholder='Spacing'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='depth'>Depth</Label>
          <Input
            type='text'
            name='depth'
            value={this.state.depth}
            onChange={this.handleChange}
            placeholder='Depth'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='notes'>Notes</Label>
          <Input
            type='text'
            name='notes'
            value={this.state.notes}
            onChange={this.handleChange}
            placeholder='Notes'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='harvesting'>Harvesting</Label>
          <Input
            type='text'
            name='harvesting'
            value={this.state.harvesting}
            onChange={this.handleChange}
            placeholder='Harvesting'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='plantImage'>Image URL</Label>
          <Input
            type='url'
            name='image'
            value={this.state.image}
            onChange={this.handleChange}
            placeholder='Enter an Image URL or Upload a File'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='plantFile'>Upload Image</Label>
          <Input
            type='file'
            name='filename'
            id='myFile'
            className='m-2'
            accept='image/*'
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
