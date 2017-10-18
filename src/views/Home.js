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

const resetAction = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({ routeName: 'Unauthorized'})
  ]
})


class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      title: 'Home',
      headerTitleStyle: { color: '#FFFFFF'},
      headerStyle: {backgroundColor: '#062D2D'}
    }
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Home!
        </Text>
        <Button
          onPress={() =>this.props.navigation.dispatch(resetAction)}
          title="Log out"
        />
        <Button
          onPress={() =>this.props.navigation.navigate('Profile')}
          title="open profile"
        />
        <Button
          onPress={() =>this.props.navigation.navigate('BranchList')}
          title="open Branches"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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

module.exports = Home;
