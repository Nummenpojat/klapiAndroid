/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from '../stylesheets/MainStyleSheet';
import HamburgerIcon from './HamburgerIcon';
import {useTranslation} from 'react-i18next';

//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import '../services/i18n';

const HamburgerContent = ({history}) => {
  const {t, i18n} = useTranslation();
  return (
    <Pressable onPress={setBurger(!burger)}>
      <View style={styles.dropDown}>
        <Text style={styles.dropDownItem}>[dropdown item]</Text>
        <Text style={styles.dropDownItem}>[dropdown item]</Text>
        <Text style={styles.dropDownItem}>[dropdown item]</Text>
      </View>
    </Pressable>
  );
};

export default HamburgerContent;
