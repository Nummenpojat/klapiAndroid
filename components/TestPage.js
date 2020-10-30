/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'

const TestPage = ({history}) => {
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.welcomeText}>Tämä on testisivu.</Text>
			</View>

			<View style={styles.buttonContainer}>
				<Button color={styles.button.color} title="Vaihda näkymää" onPress={() => history.push('/')} />
			</View>
		</View>
	)
}


export default TestPage
