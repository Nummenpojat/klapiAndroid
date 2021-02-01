/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import {Text, View, Image} from 'react-native'
import TaskPage from './Tasks'
import NavBar from './NavBar'
import CheckList from './CheckList'
import Map from './Map'
import TopBar from './TopBar'
import HamburgerContent from './HamburgerContent'

import {NativeRouter, Switch, Route} from 'react-router-native'
import styles from '../stylesheets/MainStyleSheet'

const Main = ({t, i18n}) => {

  return (
    
    <View style={styles.mainContainer}>


    <NativeRouter>

      <Route path="/" component={TopBar}/>


        <Switch>

          <Route exact path = "/tasks" component={TaskPage}/>

          <Route exact path = "/checklist" component={CheckList}/>

          <Route exact path = "/map" component={Map}/>

        </Switch>  

        <Route path="/" component={NavBar}/>

      </NativeRouter>

    </View>

)
}


export default Main;
