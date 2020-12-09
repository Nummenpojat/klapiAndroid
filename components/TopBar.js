/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Image} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'
import {useTranslation} from 'react-i18next'


//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import '../services/i18n'


const TopBar = ({history}) => {

	const { t, i18n }  = useTranslation();

	
	return (
		<View style={styles.topBarContainer}>

             <Image style={styles.hamburgerIcon} source={require('../hamburger.png')}/>
			
            <Text style={styles.topBarContent}>Local group</Text>

                
            <Text style={styles.topBarContent}> logo </Text>

            
		</View>
    )
}


export default TopBar
