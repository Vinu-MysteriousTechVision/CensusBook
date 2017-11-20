import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234B96',
    paddingBottom: 10
  },
  listViewStyle: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  buttonAddStyle: {
    position: 'absolute',
    height: 44,
    width: 44,
    right: 15,
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageAddStyle: {
    width: 44,
    height: 44
  }
});

module.exports = styles;
