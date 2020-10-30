/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'

const WelcomeScreen = ({history}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Tervetuloa Klapiin!</Text>
			
			<Button title="Vaihda näkymää" onPress={() => history.push("/testpage")}/>
		</View>
	)
}

export default WelcomeScreen
