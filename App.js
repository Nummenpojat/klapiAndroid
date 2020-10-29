import React from 'react';

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Alert,
  StatusBar,
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    marginTop: 5, 
    flexDirection: 'row',
    justifyContent: "center",
    },
  welcomeText: {
    fontSize: 40,
    color: "#cc0000",
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
    
    <Text style={styles.welcomeText}>Tervetuloa Klapiin!</Text>

    </View>
    );
};


export default Main;
