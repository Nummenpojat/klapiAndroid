/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'
import getLanguage from '../services/localizationService'

const TestPage = ({history}) => {
	let displayText = getLanguage()

	return (
		<View>
			<View style={styles.welcomeContainer}>
				<Text style={styles.welcomeText}>{displayText['testMsg']}</Text>
			</View>

			<View style={styles.buttonContainer}>
				<Button color={styles.button.color} title={displayText['changeViewBtn']} onPress={() => history.push('/')} />
			</View>
		</View>
	)
}


export default TestPage
