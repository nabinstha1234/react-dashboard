import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from 'config/routes';
import { ProtectedRoute, PublicRoute } from 'routes';
import config from 'config';

const {
  roles: { Admin, SuperAdmin, Employee },
} = config;

const allRoles = [Employee, SuperAdmin, Admin];

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path={routes.login.path} component={routes.login.component} />
        <ProtectedRoute
          roles={allRoles}
          exact
          path={routes.home.path}
          Component={routes.home.component}
        />
        {/* <BaseRoute path={routes.page404.path} component={routes.page404.component} /> */}
      </Switch>
    </Router>
  );
};
