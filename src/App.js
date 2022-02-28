import { useEffect } from "react";
import "assets/css/style.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import MemberRoute from "components/Routes/MemberRoute";
import GuestRoute from "components/Routes/GuestRoute";

import NotFound from "pages/404";
import Unauthenticated from "pages/401";
import Login from "pages/Login";
import Register from "pages/Register";
import MyClass from "pages/MyClass";
import DetailsClass from "pages/DetailsClass";
import Settings from "pages/Settings";
import Transactions from "pages/Transactions";

import { setAuthorizationHeader } from "configs/axios";
import { populateProfile } from "store/actions/users";
import users from "constants/api/users";
import Joined from "pages/Joined";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  const dispatch = useDispatch();

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("MICRO:token")) {
      session = JSON.parse(localStorage.getItem("MICRO:token"));
      setAuthorizationHeader(session.token);

      users.details().then((details) => {
        dispatch(populateProfile(details.data));
      });
    }
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
          <GuestRoute path="/private" component={Unauthenticated}></GuestRoute>

          <MemberRoute exact path="/" component={MyClass}></MemberRoute>
          <MemberRoute
            exact
            path="/joined/:class"
            component={Joined}
          ></MemberRoute>
          <MemberRoute
            exact
            path="/courses/:class/:chapter/:uid"
            component={DetailsClass}
          ></MemberRoute>
          <MemberRoute
            exact
            path="/courses/:class/"
            component={DetailsClass}
          ></MemberRoute>
          <MemberRoute path="/settings" component={Settings}></MemberRoute>
          <MemberRoute
            path="/transactions"
            component={Transactions}
          ></MemberRoute>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
