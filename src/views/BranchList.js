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
      dataSource: ds.cloneWithRows([]),
      aryBranches: []
    }
  }

  /*
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
  }*/

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      title: 'Home',
      headerTitleStyle: { color: '#FFFFFF'},
      headerStyle: {backgroundColor: '#062D2D'}
    }
  }


  tapOnBack() {
    this.props.navigation.goBack();
  }

  loadBrances() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.aryBranches)
    });
  }

  componentDidMount(){
    // this.props.navigation.setParams({ onBack: this.tapOnBack.bind(this) })
    this.loadBrances();
  }

  componentWillUnmount(){

  }

  memberRegisterCallback(data) {
    var tempArray = this.state.aryBranches;
    tempArray.push(data);
    this.setState({
      aryBranches: tempArray,
      dataSource: this.state.dataSource.cloneWithRows(tempArray)
    });
  }

  actionOnAddBranch() {
    this.props.navigation.navigate('BranchCreate', {registerCallback: this.memberRegisterCallback.bind(this)});
  }

  actionOnAddBranchMember() {
    this.props.navigation.navigate('BranchMemberCreate')
  }

  actionOnViewBranchMember() {
    this.props.navigation.navigate('BranchMemberViewList')
  }


  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ListView
          style= {{ flex: 1, backgroundColor: '#d6efff'}}
          removeClippedSubviews={false}
          enableEmptySections={true}
          showsVerticalscrollIndicator={false}
          dataSource = {this.state.dataSource}
          renderRow = {(data) =>
            <BranchView actionOnViewBranchMember = {this.actionOnViewBranchMember.bind(this)} />
          }
        />
        <TouchableHighlight style={{ position: 'absolute', height: 44, width: 44, right: 15, bottom: 15, justifyContent: 'center', alignItems: 'center' }}
          onPress={this.actionOnAddBranch.bind(this)}
          underlayColor="rgba(0,0,0,0)"
        >
          <Image style={{ width: 44, height: 44 }} source={require('../res/images/add.png')} />
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
