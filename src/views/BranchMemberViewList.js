import React, { Component } from 'react';
import {
  TouchableHighlight,
  RefreshControl,
  AppRegistry,
  StyleSheet,
  ListView,
  NetInfo,
  Image,
  View,
  Text,
  Button
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import Utils from '../utils/Utils';
import BranchMember from './BranchMember';
const Realm = require('realm');
import Schema from '../dataBase/Schema';
import colors from '../utils/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#062D2D',
    backgroundColor: '#FCFCFC',
    justifyContent: 'flex-start'
  },
  seperator: {
    height: 0.5,
    marginBottom: 20,
    backgroundColor: '#37AADC',
    backgroundColor: '#002887'
  },
  registerContainer: {
    backgroundColor: 'transparent'
  },
  btnRegister: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#37B4F0',
    backgroundColor: '#14DC96',
    backgroundColor: '#001956'
  }
});
class BranchMemberViewList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isRefreshing: false,
      dataSource: ds.cloneWithRows([]),
      aryBrancheMembers: []
    }
    this.dataBase = null;
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      title: 'Branch Members',
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


  _handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected });
  };

  tapOnBack() {
    this.props.navigation.goBack();
  }

  loadBranceMembers() {
    this.setState({
      isRefreshing: false
    });

    let objBrancheMembers =  this.dataBase.objects('BranchMember');

    var tempArray = [];
    for (var i = 0; i < objBrancheMembers.length; i++) {
      tempArray.push(objBrancheMembers[i]);
    }

    this.setState({
      aryBrancheMembers: tempArray,
      dataSource: this.state.dataSource.cloneWithRows(tempArray)
    });
  }

  memberRegisterCallback(data) {
    var tempArray = this.state.aryBrancheMembers;
    tempArray.push(data[data.length - 1]);
    this.setState({
      aryBrancheMembers: tempArray,
      dataSource: this.state.dataSource.cloneWithRows(tempArray)
    });
  }

  actionOnAddBranch() {
    this.props.navigation.navigate('BranchMemberCreate', {registerCallback: this.memberRegisterCallback.bind(this)});
  }

  actionOnViewBranchMember() {
    // this.props.navigation.navigate('BranchMemberViewList')
  }

  _onRefresh() {
    this.setState({ isRefreshing: true });
    this.loadBranceMembers();
  }


  componentWillMount() {

    Realm.open({
      schema: [Schema.BranchMemberSchema]
    }).then(dbObj => {
      this.dataBase = dbObj
    });


  }

  componentDidMount() {

    NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange );
    NetInfo.isConnected.fetch().done( (isConnected) => { this.setState({ isConnected }); } );

    this.props.navigation.setParams({ onBack: this.tapOnBack.bind(this) })
    setTimeout(() => {
      this.loadBranceMembers();
    }, 300);

  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener( 'change', this._handleConnectivityChange );
  }

  registerRequest() {

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
            <BranchMember
              branchMember={data}
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
          underlayColor="rgba(0,0,0,0)" >
          <Image style={{ width: 44, height: 44 }} source={require('../res/images/add.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = BranchMemberViewList;
