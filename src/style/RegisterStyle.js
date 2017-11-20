import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28417D',
    justifyContent: 'center',
    padding: 40
  },
  seperator: {
    height: 0.5,
    marginBottom: 20,
    backgroundColor: '#37AADC'
  },
  fieldContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  registerContainer: {
    backgroundColor: 'transparent'
  },
  imageContainer: {
    height:50,
    width: 50,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fieldIcon: {
    height:25,
    width: 25,
    backgroundColor:'transparent'
  },
  verticalSeperator: {
    height: 30,
    width: 0.5,
    backgroundColor: '#37AADC'
  },
  menuHeaderImageBoarder: {
    width: 106,
    height: 106,
    backgroundColor: '#E1E1E1',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 53
  },
  menuHeaderimage: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 100,
    borderRadius: 50,
    width: 100,
    backgroundColor: 'transparent'
  },
  menuHeaderLabel: {
    height: 20,
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  btnNavBackStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  imageNavBackStyle: {
    width: 16,
    height: 16
  },
  regHeaderStyle: {
    height: 150,
    backgroundColor: 'transparent',
    padding: 5
  },
  txtInputStyle: {
    flex:1,
    height: 44,
    margin: 5,
    backgroundColor: 'transparent',
    color: '#FFFFFF'
  },
  btnRegisterContainer: {
    height: 50,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  btnRegister: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtRegButton: {
    color: '#234B96',
    fontWeight: 'bold',
    fontSize: 20
  },
  btnNavBackContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    height: 40,
    width: 40,
    backgroundColor: 'transparent'
  }
});

module.exports = styles;
