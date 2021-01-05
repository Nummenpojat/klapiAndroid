/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React, {useState, useCallback} from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';

import styles from '../stylesheets/MainStyleSheet';

const HamburgerIcon = ({burger, toggleBurger}) => {


  return (
    <Pressable style={styles.hamburgerIcon} onPress={toggleBurger}>
      <Image
        style={styles.hamburgerIcon}
        source={require('../hamburger.jpeg')}
      />
    </Pressable>
  );
};

export default HamburgerIcon;
