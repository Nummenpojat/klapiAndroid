/*
Copyright (c) 2021 Elias Mäkelä
*/


import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#253764',
    paddingHorizontal: 0,
    alignSelf: 'stretch',
    position: 'absolute',
  
  },

  topBarContent: {
    paddingVertical: 20,
    fontSize: 14,
    color: '#ffffff',
    width: Dimensions.get('window').width * 0.33,
    textAlign: 'center',
  },
}
)

export default styles