/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'
import {useTranslation} from 'react-i18next'


//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import '../services/i18n'

const TaskPage = ({history}) => {

	const { t, i18n }  = useTranslation();


	return (
		<View style={styles.mainViewContainer}>
			
			<View style={styles.h1Container}>
				<Text style={styles.h1Text}> { t( 'tasks.title') } </Text>
			</View>
			

			<View style={styles.h2Container}>
				<Text style={styles.h2Text}> { t( 'tasks.completed' ) } </Text>

				<Text style={[styles.bodyText, styles.strikeThrough]}>Ota kuva leirinjohtajan kanssa</Text>
			</View>


			<View style={styles.h2Container}>

				<Text style={styles.h2Text}> { t( 'tasks.uncompleted' ) } </Text>
				<Text style={styles.bodyText}>Käy etsimässä hieno kivi</Text>

			</View>

		</View>
    )
}


export default TaskPage
