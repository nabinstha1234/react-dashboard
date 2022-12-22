import React, { Suspense } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { Spinner } from 'components/molecules';
import { AuthLayout } from 'components/organisms';
import routes from 'config/routes';

interface IProps extends RouteProps {
  roles?: string[];
  Component: React.FC<RouteProps>;
}

export const ProtectedRoute = ({ Component, exact, path, roles }: IProps) => {
  const isAuthed = true;
  const userHasRequiredRole = true;
  return (
    <AuthLayout>
      <React.Fragment>
        <Suspense fallback={<Spinner />}>
          <Route
            exact={exact}
            path={path}
            render={(props: RouteProps) =>
              userHasRequiredRole ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: isAuthed ? routes.home.path : routes.login.path,
                    state: {
                      requestedPath: path,
                    },
                  }}
                />
              )
            }
          />
        </Suspense>
      </React.Fragment>
    </AuthLayout>
  );
};
