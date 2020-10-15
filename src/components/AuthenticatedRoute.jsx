import Login from "pages/Login";
import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { ROUTES } from "shared/constants/routes";

const AuthenticatedRoute = ({
  path,
  component: Default,
  isAuthenticated,
  ...props
}) => {
  const { push } = useHistory();
  let redirectUrl = "";

  if (isAuthenticated) {
    if (path === ROUTES.login) push(ROUTES.home);
  } else {
    if (path === ROUTES.login) return <Route {...props} component={Login} />;
    redirectUrl = ROUTES.login;
  }

  return (
    <Route
      {...props}
      render={() =>
        isAuthenticated ? <Default /> : <Redirect to={redirectUrl} />
      }
    />
  );
};

export default AuthenticatedRoute;