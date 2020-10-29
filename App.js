/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import WelcomeScreen from './components/WelcomeScreen'
import {NativeRouter} from 'react-router-native'

const Main = () => {
  return (
    <NativeRouter>
      <WelcomeScreen/>
    </NativeRouter>
    );
};


export default Main;
