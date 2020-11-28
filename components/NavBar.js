/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button, Pressable, FlatList} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'
import NavBarItem from './NavBarItem'
import {useTranslation} from 'react-i18next'


//DO NOT REMOVE. LOOKS USELESS BUT IS APPRENTLY NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import '../services/i18n'


const NavBar = ({history}) => {

	const { t, i18n }  = useTranslation();


	return (
		<View style={styles.navBarContainer}>

			<NavBarItem path="map" text={t('navBar.location')} history={history}/>
			
			<NavBarItem path="tasks" text={t('navBar.tasks')} history={history}/>
			
			<NavBarItem path="checklist" text={t('navBar.checklist')} history={history}/>

		</View>
	)
}


export default NavBar
