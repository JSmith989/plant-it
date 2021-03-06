import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Auth extends Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className='Auth p-3'>
        <button className='btn btn-warning' onClick={this.loginClickEvent}>
        <i className="fas fa-sign-in-alt"></i> Sign In
        </button>
      </div>
    );
  }
}
