
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginController from './LoginController'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.objLoginController = new LoginController();
  }

  static navigationOptions = {
    title: 'Chat with Lucy',
  };

  loginSuccessCallback() {
    alert('success');
  }

  loginErrorCallback() {
    alert('error');
  }

  loginRequest() {
    this.objLoginController.loginRequest('vinu@gmail.com', '12345678', this.loginSuccessCallback.bind(this), this.loginErrorCallback.bind(this))
  }

  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
        <Button
          // onPress={() => navigate('Login')}
          onPress={this.loginRequest.bind(this)}
          title="Login"
        />

      </View>
    );
  }
}
module.exports = Login;
