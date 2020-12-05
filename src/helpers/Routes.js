import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../views/Home';
import Plants from '../views/Plants';
import Gardens from '../views/Gardens';
import NotFound from '../views/NotFound';

export default function Routes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={() => <Home user={user} />}
      />
      <PrivateRoute
        exact
        path='/plants'
        component={Plants}
        user={user}
      />
      <PrivateRoute
        exact
        path='/gardens'
        component={Gardens}
        user={user}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={ { pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};