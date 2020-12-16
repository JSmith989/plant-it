import React, { Component } from 'react';
import PlantsCard from '../components/Cards/PlantsCard';
import { getAllPlants } from '../helpers/data/plantData';

export default class SearchResults extends Component {
  state = {
    plants: [],
    results: [],
    searchTerm: '',
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

  performSearch = () => {
    const searchTerm = this.props.match.params.term.toLowerCase();
    const plantResults = this.state.plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm));
    this.setState({
      results: plantResults,
      searchTerm,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.props.match.params.term) {
      this.performSearch();
    }
  }

  render() {
    const { results } = this.state;
    const showResults = () => results.map((result) => <PlantsCard key={result.firebaseKey} plant={result} />);
    return (
      <div>
        <h2 className='text-white'>Search Results</h2>
        <div className='plants d-flex flex-wrap justify-content-center'>
            {showResults()}
            </div>
      </div>
    );
  }
}
