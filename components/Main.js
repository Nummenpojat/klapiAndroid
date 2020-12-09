/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import {Text, View, Image} from 'react-native'
import TaskPage from './Tasks'
import NavBar from './NavBar'
import CheckList from './CheckList'
import Location from './Location'
import TopBar from './TopBar'
import {NativeRouter, Switch, Route} from 'react-router-native'
import styles from '../stylesheets/MainStyleSheet'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Main = ({t, i18n}) => {

  return (
    
    <View style={styles.mainContainer}>

      <FontAwesomeIcon icon={faCoffee} />      

      <NativeRouter>


      <Route path="/" component={TopBar}/>

        <Switch>

          <Route exact path="/tasks" component={TaskPage}/>

          <Route exact path="/checklist" component={CheckList}/>

          <Route exact path = "/map" component={Location}/>

        </Switch>  

        <Route path="/" component={NavBar}/>

      </NativeRouter>

     {/* <Image source={require('../hamburger.png')} /> */}
    </View>

)
}


export default Main;
