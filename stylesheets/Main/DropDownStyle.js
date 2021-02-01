/*
Copyright (c) 2021 Elias Mäkelä
*/

import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

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
   color: '#FFFFFF',


  } } )

  export default styles