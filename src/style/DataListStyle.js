import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234B96',
    padding: 10
  },
  listViewStyle: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  containerListView: {
    flex: 1
  },
  btnContainer: {
    height: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  btnView: {
    flex:1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    height: 40,
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  txtView: {

  },
  imageContainerSelction: {
    position: 'absolute',
    right: 0,
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageSelction: {

  },
  imageRightArrow: {
    width: 17,
    height: 15
  },
  seperator: {
    height: 1,
    backgroundColor: 'transparent'
  }

});

module.exports = styles;
