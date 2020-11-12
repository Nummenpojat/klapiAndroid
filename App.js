/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import {Text, View} from 'react-native'
import WelcomePage from './components/WelcomePage'
import TestPage from './components/TestPage'
import TaskPage from './components/Tasks'
import NavBar from './components/NavBar'
import CheckList from './components/CheckList'
import Location from './components/Location'
import {NativeRouter, Switch, Route} from 'react-router-native'
import styles from './stylesheets/MainStyleSheet';

const Main = () => {
  
  return (
    <View style={styles.mainContainer}>

      <NativeRouter>


      <Switch>

        <Route exact path="/" render={()=><Text style={styles.welcomeText}>Hello</Text>}/>

        <Route exact path="/tasks" exact component={TaskPage}/>

        <Route exact path="/checklist" component={CheckList}/>

        <Route exact path = "/map" component={Location}/>

      </Switch>
    

      <Route path="/" component={NavBar}/>


  </NativeRouter>

</View>


)
}


export default Main;
