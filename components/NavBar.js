/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button, Pressable, FlatList} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'
import NavBarItem from './NavBarItem'
import getLanguage from '../services/localizationService'

const NavBar = ({history}) => {



	const displayText =  getLanguage()
	return (
		<View style={styles.navBarContainer}>

			<NavBarItem location="map" text="Kartta" history={history}/>
			
			<NavBarItem location="tasks" text="Tehtävät" history={history}/>
			
			<NavBarItem location="checklist" text="Rastilista" history={history}/>
		</View>
	)
}


export default NavBar
