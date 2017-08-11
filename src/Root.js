'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import RegisterPage_2 from './RegisterPage_2';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerStyle: {backgroundColor: '#37CDBE', height: 0}
  };


  componentDidMount(){

  }

  componentWillUnmount(){

  }

  tapOnSignIn() {
    this.props.navigation.navigate('Login');
  }

  tapOnSignUp() {
    this.props.navigation.navigate('RegisterPage_2');
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0)" barStyle="light-content" />
        <View style={styles.topContainer}>
          <Text style={styles.welcome}> Welcome </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={[styles.btnSignIn]}>
            <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={this.tapOnSignIn.bind(this)}>
              <Text style={{color: '#37CDBE', fontWeight: 'bold', fontSize: 20}} numberOfLines={1}>Sign In</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.seperator}/>
          <View style={[styles.signUpContainer, {flexDirection: 'row'}]}>
            <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={this.tapOnSignUp.bind(this)}>
              <Text style={{color: '#37CDBE', fontWeight: 'bold', fontSize: 20}} numberOfLines={1}>Sign Up</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const navigationScreens = StackNavigator({
  Root: { screen: Root },
  Login: { screen: Login },
  Home: { screen: Home },
  Register: {screen: Register},
  RegisterPage_2: {screen: RegisterPage_2}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37CDBE'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: '#37CDBE',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    backgroundColor: '#37CDBE',
  },
  loginContainer: {
    height: 100,
    backgroundColor: 'white'
  },
  btnSignIn: {
    height: 75,
    backgroundColor: '#FFFFFF'
  },
  signUpContainer: {
    height: 75,
    backgroundColor: '#37B4F0'
  },
  seperator: {
    height: 0.5,
    backgroundColor: '#37AADC'
  }
});

module.exports = navigationScreens;
