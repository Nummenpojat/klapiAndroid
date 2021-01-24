/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from '../stylesheets/Main/DropDownStyle';
import HamburgerIcon from './HamburgerIcon';
import {useTranslation} from 'react-i18next';

//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import '../services/i18n';

const HamburgerContent = ({history, burger}) => {
  const {t, i18n} = useTranslation();
  if (burger) { 
    return (
    <Pressable>
      <View style={styles.dropDown}>
        <Text style={styles.dropDownItem}>[dropdown item]</Text>
        <Text style={styles.dropDownItem}>[dropdown item]</Text>
        <Text style={styles.dropDownItem}>[dropdown item]</Text>
      </View>
  </Pressable>
    )
  }
  else {
    return (
      null
    )
  }


}

export default HamburgerContent;
