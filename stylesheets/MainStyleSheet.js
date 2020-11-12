/*
Copyright (c) 2020 Elias Mäkelä
*/

import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    welcomeContainer: {
      marginTop: 5, 
      alignItems: "center",
      },

    welcomeText: {
      fontSize: 40,
      color: "#cc0000",
      textAlign: "center",
      },

    buttonContainer: {
      marginTop: 15, 
      alignItems: "center",
      },

    button: {
      color: "#cc0000",
      },
    
    navBarContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: '#253764',
      padding: 15,
      alignSelf: "stretch",
      



    },
    navBarItem: {
      color: "#ffffff",

    },

    mainContainer: {
      backgroundColor: "#182b2b",
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
    }

  })

  
export default styles