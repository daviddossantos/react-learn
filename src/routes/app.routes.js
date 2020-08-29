import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/home/Home";
import { AUTH_ROUTES } from "../constants/auth.routes";
import ListItems from "../pages/listItems/ListItems";
import Cart from "../pages/cart/Cart";
import { APP_ROUTES } from "../constants/app.routes";
import { useAuth } from "../contexts/AuthProvider";
import Account from "../pages/account/Account";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Forgot from "../pages/forgot/Forgots";

export default function AppRoutes() {
  const { currentUser } = useAuth();
  function PrivateRouter({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: APP_ROUTES.ROOT,
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path={APP_ROUTES.ROOT} component={Login} />
        <Route path={APP_ROUTES.SIGNUP} component={SignUp} />
        <Route path={APP_ROUTES.FORGOT} component={Forgot} />
        <PrivateRouter path={AUTH_ROUTES.LIST_ITEMS} component={ListItems} />
        <PrivateRouter path={AUTH_ROUTES.HOME} component={Home} />
        <PrivateRouter path={AUTH_ROUTES.CART} component={Cart} />
        <PrivateRouter path={AUTH_ROUTES.ACCOUNT} component={Account} />
      </Switch>
    </Router>
  );
}
