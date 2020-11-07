import Login from "pages/Login/Login";
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
    if (path === ROUTES.LOGIN) push(ROUTES.HOME);
  } else {
    if (path === ROUTES.LOGIN) return <Route {...props} component={Login} />;
    redirectUrl = ROUTES.LOGIN;
  }

  return (
    <Route
      {...props}
      render={() =>
        isAuthenticated ? <Default {...props} /> : <Redirect to={redirectUrl} />
      }
    />
  );
};

export default AuthenticatedRoute;
