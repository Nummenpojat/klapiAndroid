/*
Copyright (c) 2020 Elias Mäkelä
*/


import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({



navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#253764',
    paddingHorizontal: 0,
    zIndex: 1,
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
  },

  navBarButtonContainer: {
    paddingVertical: 20,
    width: Dimensions.get('window').width * 0.33,
  },

  navBarButtonContent: {
    color: '#ffffff',
    flexDirection: 'row',
    textAlign: 'center',
  }
}

)

export default styles