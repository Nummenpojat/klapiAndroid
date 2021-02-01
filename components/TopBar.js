/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from '../stylesheets/Main/TopBarStyle';
import HamburgerIcon from './HamburgerIcon';
import {useTranslation} from 'react-i18next';
import HamburgerContent from './HamburgerContent';
import Logo from './Logo'


//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import '../services/i18n';

const TopBar = ({history}) => {
  const {t, i18n} = useTranslation()
  const [burger, useBurger] = useState(true)

  const toggleBurger = () => useBurger(!burger)

  return (
    <View style={styles.topBarContainer}>
      <HamburgerIcon burger={burger} toggleBurger={toggleBurger}/>

      <Text style={styles.topBarContent}>Nummenpojat</Text>

      <Logo/>
    
      <HamburgerContent burger={burger} toggleBurger={toggleBurger}/>



    </View>
  );
};

export default TopBar;
