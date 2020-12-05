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
      <h1>Plant-It</h1>
      {loadComponent()}

      <img className="homePageImg" src="https://lh3.googleusercontent.com/proxy/IkD6-juX6wRRnNm2g-KILFM45mH88x7Ua9sg5-2SH74kITPRukL6HwKw2WWjK1HWoa_AzwqbJw6y5wmHUm8A6MSRRKKeTQDQhmLWcKjPIs0uueQ2TmXUXn27eQAdHw" alt="usda map" width="1100" height="700"/>

    </div>
  );
}
