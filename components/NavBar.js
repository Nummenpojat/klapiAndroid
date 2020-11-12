/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button, Pressable, FlatList} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'
import getLanguage from '../services/localizationService'

const NavBar = ({history}) => {

	const displayText =  getLanguage()
	return (
		<View style={styles.navBarContainer}>
		
			<View>
				<Pressable onPress = {() => history.push('/map')}>

					<Text style={styles.navBarItem}>Sijainti</Text>
				</Pressable>
			</View>

			
			<View>
				<Pressable onPress = {() => history.push('/tasks')}>
				<Text style={styles.navBarItem}>Tehtävät</Text>
				</Pressable>
			</View>


			<View>
				<Pressable onPress = {() => history.push('/checklist')}>
					<Text style={styles.navBarItem}>Rastilistat</Text>
				</Pressable>
			</View>

		</View>
	)
}


export default NavBar
