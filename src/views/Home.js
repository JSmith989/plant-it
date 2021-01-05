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
    <>
    { user ? (<>
      <h1 className="homeTitle">Hardiness Zones</h1>

      <img className="homePageImg" src="https://user-images.githubusercontent.com/67443077/101262780-b15e2280-3706-11eb-8398-f076aeab7839.png" alt="usda map" />
      </>
    ) : (
      <>
      <h1 className="homeTitle">Plant-It!</h1>
      {loadComponent()}
      <p className="descript p-2 border border-white text-white">
      Organize your backyard garden with this app that allows you to create your own garden and add plants. You can add notes and pictures of your plants and gardens. You can see an example of some of the features in the pictures below.</p>

      <div className="homeGrid">
        <img className="broccoli" alt="broccoli" src="https://user-images.githubusercontent.com/67443077/103599823-a5af7880-4ecb-11eb-9b1a-b677174cc850.png"></img>

        <img className="broccoli" src="https://user-images.githubusercontent.com/67443077/103599819-a34d1e80-4ecb-11eb-916e-64db1bff60cf.png" alt="gardenForm" />
      </div>
      </>
    )}
    </>
  );
}
