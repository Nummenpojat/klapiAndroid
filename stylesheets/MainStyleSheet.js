/*
Copyright (c) 2020 Elias Mäkelä
*/

import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    h1Container: {
      marginTop: 5, 
      alignItems: "center",
      },

    h1Text: {
      fontSize: 40,
      color: "#cc0000",
      textAlign: "center",
      },

    h2Container: {
      marginTop: 5, 
      alignItems: "center",
      },

    h2Text: {
      fontSize: 20,
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
      paddingHorizontal: 0,
      
      alignSelf: "stretch",
    
    },

    navBarButtonContainer: {
      paddingVertical: 20,
    },

    navBarButtonContent: {
      color: "#ffffff",

    },

    mainContainer: {
      backgroundColor: "#ffffff",
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
    }

  })

  
export default styles