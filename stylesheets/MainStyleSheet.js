/*
Copyright (c) 2020 Elias Mäkelä
*/

<<<<<<< HEAD
import {StyleSheet, Dimensions} from 'react-native'
=======
import {StyleSheet, useWindowDimensions} from 'react-native'
>>>>>>> 5ac4e758cdbce14a31381d6be048b140dd452f03

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
      width: Dimensions.get('window').width * 0.33
    },

    navBarButtonContent: {
      color: "#ffffff",
      flexDirection: "row",
      textAlign: "center",

    },

    mainContainer: {
      backgroundColor: "#ffffff",
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
    },

<<<<<<< HEAD
    topBarContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: '#253764',
      paddingHorizontal: 0,
      alignSelf: "stretch",
  
    },

    topBarContent: {
      paddingVertical: 20,
      color: "#ffffff",
      width: Dimensions.get('window').width * 0.33,
      textAlign: "center",    

    },



    mainViewContainer: {
      flex: 1,

    },
    
    hamburgerIcon: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
  
=======
    hamburgerMenu: {
      width: 0,
      height: useWindowDimensions().height
>>>>>>> 5ac4e758cdbce14a31381d6be048b140dd452f03
    }

  })

  
export default styles