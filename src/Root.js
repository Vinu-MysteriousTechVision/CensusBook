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
import getSlideFromRightTransitionConfig from './components/SlideFromRightTransition';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Profile from './views/Profile';

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
    this.props.navigation.navigate('Register');
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

const UnauthorizedNavigator = StackNavigator({
  Root: { screen: Root },
  Login: { screen: Login },
  Register: { screen: Register }

}, {
  initialRouteName: 'Root',
  headerMode: 'none',
  transitionConfig: getSlideFromRightTransitionConfig

});

const AuthorizedNavigator  = StackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile }
}, {
  initialRouteName: 'Home',
  // headerMode: 'none',
  transitionConfig: getSlideFromRightTransitionConfig

});

const navigationScreens = StackNavigator({
  Unauthorized: { screen: UnauthorizedNavigator  },
  Authorized: { screen: AuthorizedNavigator }
}, {
  initialRouteName: 'Unauthorized',
  headerMode: 'none'
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#062D2D'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: '#062D2D',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#062D2D',
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
    backgroundColor: '#37B4F0'
  },
  seperator: {
    height: 0.5,
    backgroundColor: '#37AADC'
  }
});

module.exports = navigationScreens;
