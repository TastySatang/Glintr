import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import MainPage from "./pages/MainPage/MainPage";
import Photos from "./pages/Photos/Photos"
import Browse from './pages/Browse/Browse'

import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      <Route path='/' exact>
        <MainPage />
      </Route>
      {isLoaded && (
        <Switch>

          <Route path="/photos/new">
            <Photos />
          </Route>
          <Route path="/photos">
            <Browse />
          </Route>
          {/* <Route path="/login">
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
