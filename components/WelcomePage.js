/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'


const WelcomePage = ({history, context}) => {
	return (

		<View>
			<View style={styles.container}>
				<Text style={styles.welcomeText}>Tervetuloa Klapiin! {context}</Text>	
			</View>

			<View style = {styles.buttonContainer}>
				<Button color={styles.button.color} title="Vaihda näkymää" onPress={() => history.push("/testpage")}/>
			</View>
		</View>
	)
}


export default WelcomePage
