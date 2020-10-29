/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'

const TestPage = ({history}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Tämä on testisivu.</Text>
			<Button buttonStyle={styles.viewChanger} title="Vaihda näkymää" onPress={() => history.push('/')} />
		</View>
	)
}

export default TestPage
