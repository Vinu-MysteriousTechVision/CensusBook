'use strict';
import React, { Component } from 'react';
import {
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  ListView,
  Image,
  View,
  Text,
  Button
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import Utils from '../utils/Utils';
import BranchView from './Branch';

class BranchList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      title: 'Branches',
      headerTitleStyle: { color: '#FFFFFF'},
      headerStyle: {backgroundColor: '#062D2D'},
      headerBackTitleStyle: {backgroundColor: '#FFFFFF'},
      headerLeft: (
        <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, backgroundColor: 'transparent'}} underlayColor="rgba(255,255,255,0.15)"
        onPress={() => params.onBack()}>
          <Image style={{ width: 16, height: 16 }} source={require('../res/images/back_white.png')} />
        </TouchableHighlight>
      )
    }
  }

  tapOnBack() {
    this.props.navigation.goBack();
  }

  loadBrances() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(['abc', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg'])
    });
  }

  actionOnAddBranch() {
    this.props.navigation.navigate('BranchCreate')
  }

  componentDidMount(){
    this.props.navigation.setParams({ onBack: this.tapOnBack.bind(this) })
    this.loadBrances();
  }

  componentWillUnmount(){

  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ListView
          style= {{ flex: 1, backgroundColor: 'gray'}}
          removeClippedSubviews={false}
          enableEmptySections={true}
          showsVerticalscrollIndicator={false}
          dataSource = {this.state.dataSource}
          renderRow = {(data) =>
            <BranchView/>
          }
        />
        <TouchableHighlight style={{ position: 'absolute', height: 44, width: 44, right: 15, bottom: 15, justifyContent: 'center', alignItems: 'center' }}
          onPress={this.actionOnAddBranch.bind(this)}
          underlayColor="rgba(0,0,0,0)"
        >
          <View style={{ width: 44, height: 44 , backgroundColor: 'green'}}/>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

module.exports = BranchList;
