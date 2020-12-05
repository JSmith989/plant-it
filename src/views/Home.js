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
    </div>
  );
}
