import React, { Component } from 'react';
import getUid from '../../helpers/data/authData';
import { getUsersGardens } from '../../helpers/data/gardenData';

export default class GardenDropdown extends Component {
  state = {
    gardens: [],
  };

  componentDidMount() {
    this.getBoards();
  }

  getBoards = () => {
    const currentUserId = getUid();
    getUsersGardens(currentUserId).then((response) => {
      this.setState({
        gardens: response,
      });
    });
  }

  render() {
    const { gardens } = this.state;
    const displayGardens = () => (
      gardens.map((garden) => <option key={garden.firebaseKey} value={garden.firebaseKey}>{garden.name}</option>)
    );
    return (
        <div className="form-group">
        <select className="form-control"
        name="gardenId"
        onChange={this.props.onChange}>
          <option value=''>Choose Garden</option>
          {displayGardens()}
        </select>
    </div>
    );
  }
}
