/*
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react';
import {Text, View} from 'react-native'
import TaskPage from './Tasks'
import NavBar from './NavBar'
import CheckList from './CheckList'
import Location from './Location'
import {NativeRouter, Switch, Route} from 'react-router-native'
import styles from '../stylesheets/MainStyleSheet';


const Main = ({t, i18n}) => {

  return (
    
    <View style={styles.mainContainer}>

      <NativeRouter>


      <Switch>

        <Route exact path="/tasks" exact component={TaskPage}/>

        <Route exact path="/checklist" component={CheckList}/>

        <Route exact path = "/map" component={Location}/>

      </Switch>
    

      <Route path="/" component={NavBar}/>


    </NativeRouter>

  <Text>{t('navBar.location')}</Text>
  <Text>{i18n.language}</Text>

  </View>


)
}


export default Main;
