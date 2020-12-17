/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React, {useState, useCallback} from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';

import styles from '../stylesheets/MainStyleSheet';
import HamburgerContent from './HamburgerContent';

const HamburgerIcon = () => {
  return (
    <Pressable style={styles.hamburgerIcon}>
      <Image
        style={styles.hamburgerIcon}
        source={require('../hamburger.jpeg')}
      />
    </Pressable>
  );
};

export default HamburgerIcon;
