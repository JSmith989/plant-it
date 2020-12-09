import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import getUser from '../../helpers/data/authData';
import { createGarden } from '../../helpers/data/gardenData';

export default class GardenForm extends Component {
  state = {
    firebaseKey: this.props.garden?.firebaseKey || '',
    image: this.props.garden?.image || '',
    name: this.props.garden?.name || '',
    soilType: this.props.garden?.soilType || '',
    sunType: this.props.garden?.sunType || '',
    zone: this.props.garden?.zone || '',
    userId: this.props.garden?.userId || '',
  };

  componentDidMount() {
    const userId = getUser();
    this.setState({ userId });
  }

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
      createGarden(this.state)
        .then(() => {
          this.props.onUpdate();
        });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for='gardenName'>Name</Label>
          <Input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='Garden Name'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='gardenZone'>Zone</Label>
          <Input
            type='select'
            name='zone'
            value={this.state.zone}
            onChange={this.handleChange}
            placeholder='Garden Zone'
            className='form-control form-control-lg m-1'
            required
          >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='gardenSoil'>Soil</Label>
          <Input
            type='text'
            name='soilType'
            value={this.state.soilType}
            onChange={this.handleChange}
            placeholder='Soil Type'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='gardenSun'>Sun</Label>
          <Input
            type='text'
            name='sunType'
            value={this.state.sunType}
            onChange={this.handleChange}
            placeholder='Sun Type'
            className='form-control form-control-lg m-1'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='gardenImage'>Image URL</Label>
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
          <Label for='gardenFile'>Upload Image</Label>
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
