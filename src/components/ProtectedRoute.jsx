import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.client.user);
  const token = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={(props) =>
        token || (user && user.name) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;