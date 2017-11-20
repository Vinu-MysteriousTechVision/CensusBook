import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28417D'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: '#28417D',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28417D'
  },
  loginContainer: {
    height: 100,
    backgroundColor: 'white'
  },
  btnSignIn: {
    height: 50,
    width: 230,
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  signUpContainer: {
    height: 50,
    width: 230,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#234B96'
  },
  seperator: {
    height: 0.5,
    backgroundColor: '#37AADC'
  },
  buttonStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtSignIn: {
    color: '#234B96',
    fontWeight: 'bold',
    fontSize: 20
  },
  txtSignUp: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20
  }
});

module.exports = styles;
