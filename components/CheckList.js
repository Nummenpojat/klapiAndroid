/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'
import getLanguage from '../services/localizationService'

const CheckList = ({history}) => {
	let displayText = getLanguage()

	return (
		
			<View style={styles.welcomeContainer}>
				<Text style={styles.welcomeText}>{displayText['navBar']['checklist']}</Text>
			</View>

	)
}


export default CheckList
