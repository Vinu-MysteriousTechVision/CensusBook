
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234B96',
    justifyContent: 'flex-start',
    paddingBottom: 10
  },
  btnNavBackStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: 'transparent'
  },
  imageNavBackStyle: {
    width: 16,
    height: 16
  },
  listViewStyle: {
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
  },
  viewContentContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 5,
    minHeight: 50
  },
  txtContentHeader: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000'
  },
  txtContent: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#000'
  }
});

module.exports = styles;
