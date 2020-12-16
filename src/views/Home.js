import React from 'react';
import Auth from '../components/Auth';

export default function Home({ user }) {
  const loadComponent = () => {
    let component = '';
    if (!user) {
      component = <Auth />;
    }
    return component;
  };

  return (
    <div>
      <h1 className="homeTitle">Plant-It!</h1>
      {loadComponent()}

      <img className="homePageImg" src="https://user-images.githubusercontent.com/67443077/101262780-b15e2280-3706-11eb-8398-f076aeab7839.png" alt="usda map" width="1100" height="700"/>

    </div>
  );
}
