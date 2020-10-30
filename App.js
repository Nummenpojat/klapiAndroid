/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import WelcomeScreen from './components/WelcomeScreen'
import TestPage from './components/TestPage'
import {NativeRouter, Switch, Route} from 'react-router-native'

const Main = () => {
  return (
    <NativeRouter>
      <>
        <Switch>
          <Route exact path="/" component={WelcomeScreen}/>
          <Route exact path="/testpage" component={TestPage}/>
        </Switch>
      </>
    </NativeRouter>
    );
};


export default Main;
