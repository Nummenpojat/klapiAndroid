/* 
Copyright (c) 2020 Elias Mäkelä
*/

import {React, useState} from 'react';
import {Text, View} from 'react-native';
import styles from '../stylesheets/MainStyleSheet';
import HamburgerIcon from './HamburgerIcon';
import {useTranslation} from 'react-i18next';
import HamburgerContent from './HamburgerContent';


//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import '../services/i18n';

const TopBar = ({history}) => {
  const {t, i18n} = useTranslation();
  const [burger, setBurger] = useState(true)


  return (
    <View style={styles.topBarContainer}>
      <HamburgerIcon />

      <Text style={styles.topBarContent}>Local group</Text>

      <Text style={styles.topBarContent}>logo</Text>

      <HamburgerContent/>
    </View>
  );
};

export default TopBar;
