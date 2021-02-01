/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React, {useState, useCallback} from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';

import styles from '../stylesheets/MainStyleSheet';

const Logo = ({burger, toggleBurger}) => {


  return (
    <Pressable style={ styles.hamburgerIcon }  onPress={ toggleBurger }>
    
      <Image
        style={styles.hamburgerIcon}
        source={require('../logo.png')}
      />
    </Pressable>
  );
};

export default Logo;
