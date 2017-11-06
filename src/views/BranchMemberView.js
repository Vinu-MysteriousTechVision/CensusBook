import React, { Component } from 'react';
import {
  TouchableHighlight,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#062D2D',
    backgroundColor: '#FCFCFC',
    justifyContent: 'flex-start',
    padding: 10
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
class branchMemberView extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
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
      dataSource: this.state.dataSource.cloneWithRows(['abc', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg', 'bvg'])
    });
  }

  actionOnAddBranch() {
    this.props.navigation.navigate('BranchCreate')
  }

  actionOnAddBranchMember() {
    this.props.navigation.navigate('BranchMemberCreate')
  }

  actionOnViewBranchMember() {
    this.props.navigation.navigate('BranchMemberView')
  }


  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange );
    NetInfo.isConnected.fetch().done( (isConnected) => { this.setState({ isConnected }); } );

    this.props.navigation.setParams({ onBack: this.tapOnBack.bind(this) })
    this.loadBranceMembers();
  }

  componentWillMount() {

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
          style= {{ flex: 1, backgroundColor: 'gray'}}
          removeClippedSubviews={false}
          enableEmptySections={true}
          showsVerticalscrollIndicator={false}
          dataSource = {this.state.dataSource}
          renderRow = {(data) =>
            <BranchMember
              actionOnAddBranchMember = {this.actionOnAddBranchMember.bind(this)}
              actionOnViewBranchMember = {this.actionOnViewBranchMember.bind(this)} />
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

module.exports = branchMemberView;
