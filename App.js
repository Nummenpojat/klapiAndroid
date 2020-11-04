/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import WelcomePage from './components/WelcomePage'
import TestPage from './components/TestPage'
import {NativeRouter, Switch, Route} from 'react-router-native'
import {View, Text} from 'react-native'

const Main = () => {
  
  return (

  <NativeRouter>
      
      
      <Switch>


          <Route exact path="/" component={WelcomePage}/>

          <Route exact path="/testpage" component={TestPage}/>
            
 
          
        </Switch>

  </NativeRouter>
)
}


export default Main;
