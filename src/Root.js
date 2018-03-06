'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransitionConfig from './components/SlideFromRightTransition';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Profile from './views/Profile';
import BranchList from './views/BranchList';
import BranchCreate from './views/BranchCreate';
import BranchMemberCreate from './views/BranchMemberCreate';
import BranchMemberViewList from './views/BranchMemberViewList';
import DataList from './views/DataList';

import styles from './style/RootStyle';
import PropTypes from 'prop-types';
import codePush from "react-native-code-push";

class Root extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerStyle: { backgroundColor: '#37CDBE', height: 0 }
  };


  componentDidMount(){
    console.log('abc');
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
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0)" barStyle="light-content" />
        <View style={styles.topContainer}>
          <Text style={styles.welcome}> KSS Survay</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={[styles.btnSignIn]}>
            <TouchableHighlight style={styles.buttonStyle} underlayColor="rgba(255,255,255,0.15)" onPress={this.tapOnSignIn.bind(this)}>
              <Text style={styles.txtSignIn} numberOfLines={1}>Sign In</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.signUpContainer}>
            <TouchableHighlight style={styles.buttonStyle} underlayColor="rgba(255,255,255,0.15)" onPress={this.tapOnSignUp.bind(this)}>
              <Text style={styles.txtSignUp} numberOfLines={1}>Sign Up</Text>
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
  Profile: { screen: Profile },
  BranchList: { screen: BranchList },
  BranchCreate: { screen: BranchCreate },
  BranchMemberCreate: { screen: BranchMemberCreate },
  BranchMemberViewList: { screen: BranchMemberViewList },
  DataList: { screen: DataList }
}, {
  initialRouteName: 'BranchList',
  transitionConfig: getSlideFromRightTransitionConfig
});

const navigationScreens = StackNavigator({
  Unauthorized: { screen: UnauthorizedNavigator  },
  Authorized: { screen: AuthorizedNavigator }
}, {
  initialRouteName: 'Unauthorized',
  headerMode: 'none'
});

Root.propTypes = {
  navigation: PropTypes.object
};

navigationScreens = codePush(navigationScreens);
module.exports = navigationScreens;
