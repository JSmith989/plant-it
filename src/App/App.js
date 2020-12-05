import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from '../helpers/data/connection';
import './App.scss';
import TheNavbar from '../components/TheNavbar';
import Routes from '../helpers/Routes';
import setCurrentUser from '../helpers/data/userData';

fbConnection();

class App extends React.Component {
  state = {
    user: null,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser.setCurrentUser(user);
        this.setState({ user });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Router>
          <TheNavbar user={user} />
          <Routes user={user} />
        </Router>
      </div>
    );
  }
}

export default App;
