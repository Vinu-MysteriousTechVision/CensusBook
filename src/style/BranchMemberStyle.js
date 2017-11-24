import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'transparent'
  },
  viewTopBorder: {
    height: 5,
    backgroundColor: '#11c1ff'
  },
  btnViewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 5
  },
  viewRowStyle: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: 20,
    justifyContent: 'flex-start',
    paddingLeft: 10
  },
  txtKeyStyle: {
    width: 100,
    backgroundColor: 'transparent',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#000000'
  },
  txtValueStyle: {
    marginLeft: 10,
    fontWeight: 'normal',
    fontSize: 12,
    color: '#000000'
  },
  txtHeaderStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000000'
  },
  txtNormalStyle: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#000000'
  },
  viewTopContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start'
  },
  viewProfileIconContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  btnProfileIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 80,
    borderRadius: 40,
    width: 80,
    backgroundColor: 'transparent'
  },
  imageProfileIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 78,
    borderRadius: 39,
    width: 78,
    backgroundColor: 'transparent'
  },
  viewProfileDataConatiner: {
    backgroundColor: 'transparent',
    minHeight: 20,
    justifyContent: 'flex-start',
    paddingLeft: 20
  }
});

module.exports = styles;
