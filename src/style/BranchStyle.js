import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#d6efff'
  },
  btnBranchContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row'
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
    padding: 10
  },
  txtContentHeader: {
    fontWeight: 'bold',
    fontSize: 14
  },
  txtContent: {
    fontWeight: 'normal',
    fontSize: 12
  },
  viewRightArrow: {
    width: 30,
    backgroundColor: '#FFFFFF',
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
