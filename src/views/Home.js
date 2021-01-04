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
    <div className="grid">
      <h1 className="homeTitle">Plant-It!</h1>
      {loadComponent()}
      <p className="descript p-2 border border-white text-white">
      Organize your backyard garden with this app that allows you to create your own garden and add plants. You can add notes and pictures of your plants and gardens. Pictured below is the hardiness zone map so you can figure out when to plant your seeds.</p>

      <img className="homePageImg" src="https://user-images.githubusercontent.com/67443077/101262780-b15e2280-3706-11eb-8398-f076aeab7839.png" alt="usda map" />

    </div>
  );
}
