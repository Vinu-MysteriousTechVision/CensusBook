'use strict';
import React, { Component } from 'react';
import {
  TouchableHighlight,
  RefreshControl,
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
const Realm = require('realm');
import { Branch } from '../entities';
import Schema from '../dataBase/Schema';
import colors from '../utils/Color';

class BranchList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isRefreshing: false,
      dataSource: ds.cloneWithRows([]),
      aryBranches: []
    }
    this.dataBase = null;
  }

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
      isRefreshing: false
    });

    let objBranches =  this.dataBase.objects('Branch');

    var tempArray = [];
    for (var i = 0; i < objBranches.length; i++) {
      tempArray.push(objBranches[i]);
    }

    this.setState({
      aryBranches: tempArray,
      dataSource: this.state.dataSource.cloneWithRows(tempArray)
    });
  }

  componentWillMount() {

    Realm.open({
      schema: [Schema.BranchSchema]
    }).then(dbObj => {
      this.dataBase = dbObj
    });
  }

  componentDidMount(){

    setTimeout(() => {
      this.loadBrances();
    }, 300);

  }

  componentWillUnmount(){

  }

  memberRegisterCallback(data, dbObjBranch) {
    var tempArray = this.state.aryBranches;
    tempArray.push(dbObjBranch[dbObjBranch.length - 1]);
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

  _onRefresh() {
    this.setState({ isRefreshing: true });
    this.loadBrances();
  }



  render() {

    return (
      <View style={styles.container}>
        <ListView
          style= {{ flex: 1, backgroundColor: '#d6efff'}}
          removeClippedSubviews={false}
          enableEmptySections={true}
          showsVerticalscrollIndicator={false}
          dataSource = {this.state.dataSource}
          renderRow = {(data) =>
            <BranchView
              branch={data}
              actionOnViewBranchMember = {this.actionOnViewBranchMember.bind(this)} />
          }
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              tintColor={colors.progressColorDark}
              colors={[colors.refreshColor1, colors.refreshColor2, colors.refreshColor3, colors.refreshColor4]}
              progressBackgroundColor={colors.refreshBgColor}
            />
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
