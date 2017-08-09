
import React, { Component } from 'react';
import {
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  NetInfo,
  Keyboard
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import LoginController from './LoginController'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: '#37CDBE'
  },
  bottomContainer: {
    flex: 0.5,
    backgroundColor: 'gray',
  },
  loginContainer: {
    height: 100,
    backgroundColor: 'white'
  },
  btnSignIn: {
    flex: 0.25,
    // height: 75,
    backgroundColor: '#37B4F0'
  },
  signUpContainer: {
    flex: 0.25,
    // height: 75,
    backgroundColor: '#32E182'
  },
  seperator: {
    height: 1,
    backgroundColor: '#37AADC'
  },
  userName: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  passWord: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.15)",
  }
})

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
      username: '',
      password: ''
    };

    this.objLoginController = new LoginController();
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }

  static navigationOptions = {
    title: 'Login',
  };
  _handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected });
  };

  _keyboardDidShow (e) {

  }

  _keyboardDidHide (e) {

  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange );
    NetInfo.isConnected.fetch().done( (isConnected) => { this.setState({ isConnected }); } );
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener( 'change', this._handleConnectivityChange );
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }


  loginSuccessCallback() {
    this.props.navigation.dispatch(resetAction)
  }

  loginErrorCallback() {
    alert('error');
  }

  loginRequest() {
    this.objLoginController.loginRequest('vinu11@gmail.com', 'qwerty', this.loginSuccessCallback.bind(this), this.loginErrorCallback.bind(this))
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.loginContainer}>
            <View style={styles.userName}>
              <View style={{height:50, width: 50, backgroundColor:'#E6F5F5', justifyContent: 'center', alignItems: 'center',}}>
                <Image style={{height:30, width: 30, backgroundColor:'#E6F5F5'}} source={require('./res/images/usr_blue.png')} />
              </View>
              <TextInput
                ref={(objUserName) => this.refUsername = objUserName}
                style={{flex:1,height: 44, margin: 5, backgroundColor: 'transparent'}}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                editable={true}
                maxLength={100}
                placeholder="Username or Email"
                placeholderTextColor= '#37AADC'
                underlineColorAndroid="rgba(0,0,0,0)"
                returnKeyType="next"
                returnKeyLabel="次"
                keyboardType="email-address"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.seperator}>
            </View>
            <View style={styles.passWord}>
              <View style={{height:50, width: 50, backgroundColor:'#E6F5F5', justifyContent: 'center', alignItems: 'center',}}>
                <Image style={{height:30, width: 30, backgroundColor:'#E6F5F5'}} source={require('./res/images/pwd_blue.png')} />
              </View>
              <TextInput
                ref={(objUserName) => this.refUsername = objUserName}
                style={{flex:1, height: 44, margin: 5, backgroundColor: 'transparent'}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                editable={true}
                maxLength={100}
                placeholder="Password"
                placeholderTextColor= '#37AADC'
                underlineColorAndroid="rgba(0,0,0,0)"
                returnKeyType="next"
                returnKeyLabel="次"
                keyboardType="email-address"
                blurOnSubmit={false}
              />
            </View>
          </View>
          <View style={[styles.btnSignIn]}>
            <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={this.loginRequest.bind(this)}>
              <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}} numberOfLines={1}>Sign In</Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.signUpContainer, {flexDirection: 'row'}]}>
            <View style={{flex: 0.4, backgroundColor:'#1E96A0'}}>
              <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={() => alert('click')}>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}} numberOfLines={2}>Forgot Password</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex: 0.6, backgroundColor:'#2DC391'}}>
              <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={() => alert('click')}>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}} numberOfLines={1}>Sign Up</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

      </View>
    );
  }
}
module.exports = Login;
