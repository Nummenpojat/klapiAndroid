import React from 'react'
import {Text, View, Button, Pressable, FlatList} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'
import getLanguage from '../services/localizationService'
import i18n from 'i18next'
import { useTranslation, initReactI18next, Trans } from "react-i18next";

const NavBarItem = ({location, text, history}) => (

<View>
<Pressable onPress = {() => history.push(location)}>
    <View style={styles.navBarButtonContainer}>
        <Text style={styles.navBarButtonContent}> {text} </Text>
    </View>
</Pressable>
</View>
)

export default NavBarItem;