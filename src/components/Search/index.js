import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchInput extends Component {
  state = {
    text: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.text}`);

    this.setState({
      text: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          aria-label='Search'
          name='text'
          value={this.state.text}
          placeholder='Search for a Plant'
          onChange={this.handleChange}
          className="form-control mr-sm-2"
        />
        <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
    );
  }
}

export default withRouter(SearchInput);
