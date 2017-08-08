'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import Login from './Login';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  render() {
    const { navigate } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login'})
      ]
    })

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={() => navigate('Login')}
          // onPress={() =>this.props.navigation.dispatch(resetAction)}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

const navigationScreens = StackNavigator({
  Root: { screen: Root },
  Login: { screen: Login },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = navigationScreens;
