import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'transparent'
  },
  btnBranchContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  viewLeftBoreder: {
    width: 10,
    backgroundColor: '#11c1ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewContentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingHorizontal: 20,
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent'
  },
  txtContentHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000'
  },
  txtContent: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#000'
  },
  viewRightArrow: {
    position: 'absolute',
    right: 5,
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageRightArrow: {
    width: 10,
    height: 20
  },
  viewBottomBorder: {
    height: 1,
    backgroundColor: 'gray'
  }
});

module.exports = styles;
