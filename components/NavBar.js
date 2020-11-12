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
				<View style={styles.navBarButtonContainer}>

					<Text style={styles.navBarButtonContent}> {displayText['navBar']['location']} </Text>

					</View>

				</Pressable>
			</View>

			
			<View>
				<Pressable onPress = {() => history.push('/tasks')}>
					<View style={styles.navBarButtonContainer}>
				<Text style={styles.navBarButtonContent}> {displayText['navBar']['tasks']} </Text>
					</View>
				</Pressable>

			</View>


			<View>
				<Pressable onPress = {() => history.push('/checklist')}>
				<View style={styles.navBarButtonContainer}>

					<Text style={styles.navBarButtonContent}>{displayText['navBar']['checklist']}</Text>
				</View>
				</Pressable>
			</View>

		</View>
	)
}


export default NavBar
