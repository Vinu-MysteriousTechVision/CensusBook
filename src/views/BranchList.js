'use strict';
import React, { Component } from 'react';
import {
  TouchableHighlight,
  RefreshControl,
  ListView,
  Image,
  View
} from 'react-native';
import BranchView from './Branch';
import colors from '../utils/Color';
import styles from '../style/BranchListStyle';
import BranchListController from '../controller/BranchListController';
import PropTypes from 'prop-types';

class BranchList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isRefreshing: false,
      dataSource: ds.cloneWithRows([])
    };
    this.objBranchListController = new BranchListController();
  }

  static navigationOptions = () => {

    return {
      title: 'Home',
      headerTitleStyle: { color: '#FFFFFF' },
      headerStyle: { backgroundColor: '#4187F5' }
    };
  }

  componentWillMount() {
    this.objBranchListController.openDBSchema();
  }

  componentDidMount(){

    setTimeout(() => {
      try {
        this.objBranchListController.loadBrances();
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.objBranchListController.getBranches()),
          isRefreshing: false
        });
      } catch (e) {
        alert('Error: ' + e);
      }
    }, 300);
  }

  componentWillUnmount(){

  }

  memberRegisterCallback(branch) {
    try {
      this.objBranchListController.addBranch(branch);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.objBranchListController.getBranches())
      });
    } catch (e) {
      alert('Error: ' + e);
    }
  }

  actionOnAddBranch() {
    this.props.navigation.navigate('BranchCreate', { registerCallback: this.memberRegisterCallback.bind(this) });
  }

  actionOnViewBranchMember(branch) {
    // this.objBranchListController.updateBranch(branch);
    this.props.navigation.navigate('BranchMemberViewList', { branch: branch });
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true
    });

    try {
      this.objBranchListController.loadBrances();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.objBranchListController.getBranches()),
        isRefreshing: false
      });
    } catch (e) {
      alert('Error: ' + e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={[styles.listViewStyle]}
          removeClippedSubviews={false}
          enableEmptySections={true}
          showsVerticalscrollIndicator={false}
          dataSource={this.state.dataSource}
          renderRow={(data) =>
            <BranchView
              branch={data}
              actionOnViewBranchMember={this.actionOnViewBranchMember.bind(this, data)} />
          }
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              tintColor={colors.progressColorDark}
              colors={[colors.refreshColor1, colors.refreshColor2, colors.refreshColor3, colors.refreshColor4]}
              progressBackgroundColor={colors.refreshBgColor} />
          } />
        <TouchableHighlight style={styles.buttonAddStyle}
          onPress={this.actionOnAddBranch.bind(this)}
          underlayColor="rgba(0,0,0,0)">
          <Image style={styles.imageAddStyle} source={require('../res/images/add.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

BranchList.propTypes = {
  navigation: PropTypes.object
};

module.exports = BranchList;
