/*
Copyright (c) 2020 Elias Mäkelä
*/

import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  h1Container: {
    marginTop: 5,
    alignItems: 'center',
  },

  h1Text: {
    fontSize: 40,
    color: '#cc0000',
    textAlign: 'center',
    zIndex: -1,
  },

  h2Container: {
    marginTop: 5,
    alignItems: 'center',
  },

  h2Text: {
    fontSize: 20,
    color: '#cc0000',
    textAlign: 'center',
    zIndex: -1,
  },



  mainContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  mainViewContainer: {
    flex: 1,
    position: 'relative',
    top: 60
  },

  hamburgerIcon: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },

  dropDown: {
    marginTop: 59,
    backgroundColor: '#253764',
    flexDirection: 'row',
    position: "absolute",
    width: Dimensions.get('window').width,
    right: 0
  },

  dropDownItem: {
   marginVertical: 12, 
   width: Dimensions.get('window').width * 0.33,
   textAlign: 'center',


  }

});

export default styles;
