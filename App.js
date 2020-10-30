/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import WelcomePage from './components/WelcomePage'
import TestPage from './components/TestPage'
import {NativeRouter, Switch, Route} from 'react-router-native'
import {View} from 'react-native'

const LocaleContext = React.createContext('fi')

const Main = () => {
  return (

<LocaleContext.Provider>
  <NativeRouter>
      <View>
      <Switch>
          

          <Route exact path="/" component={WelcomePage}/>

          <Route exact path="/testpage" component={TestPage}/>
          
        </Switch>

      </View>
  </NativeRouter>
</LocaleContext.Provider>

);
};


export default Main;
