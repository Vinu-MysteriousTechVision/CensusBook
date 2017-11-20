import { StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollViewLayout: {
    flex: 1,
    width: width,
    backgroundColor: 'transparent'
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: '#28417D'
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#28417D'
  },
  loginContainer: {
    width: 250,
    backgroundColor: 'transparent'
  },
  signUpContainer: {
    flex: 0.25,
    backgroundColor: '#32E182'
  },
  seperator: {
    height: 0.5,
    backgroundColor: '#37AADC'
  },
  verticalSeperator: {
    height: 30,
    width: 0.5,
    backgroundColor: '#37AADC'
  },
  userName: {
    height: 50,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "transparent"
  },
  passWord: {
    height: 50,
    width: 250,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "transparent"
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
  txtInputIconContainer: {
    height:50,
    width: 50,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgTxtInputIcon: {
    height:30,
    width: 30,
    backgroundColor:'transparent'
  },
  txtInputStyle: {
    height: 50,
    width: 250,
    margin: 5,
    backgroundColor: 'transparent',
    color: '#FFFFFF'
  },
  btnSignInContainer: {
    height: 50,
    width: 250,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  btnSignIn: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtSignInButton: {
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
