/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'

const WelcomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Tervetuloa Klapiin!</Text>
		</View>
	)
}

export default WelcomeScreen
