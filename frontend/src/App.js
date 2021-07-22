import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import MainPage from "./pages/MainPage/MainPage";
import Photos from "./pages/Photos/Photos"
import Browse from './pages/Browse/Browse'
import ImgPage from './pages/Browse/ImgPage'

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
          <Route path="/photos" exact component={Browse} />
          <Route path="/photos/new" exact component={Photos} />
          <Route path="/photos/:imageId" exact component={ImgPage} isLoaded={isLoaded} />
          <Route path="/signup" exact component={SignupFormPage} />
        </Switch>
      )}
    </>
  );
}

export default App;
