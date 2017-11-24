import React, { Component } from 'react';
import {
  TouchableHighlight,
  RefreshControl,
  ListView,
  NetInfo,
  Image,
  View,
  Text
} from 'react-native';
import BranchMember from './BranchMember';
import colors from '../utils/Color';
import styles from '../style/BranchMemberListStyle';
import BranchMemberListController from '../controller/BranchMemberListController';
import PropTypes from 'prop-types';

class BranchMemberViewList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isRefreshing: false,
      dataSource: ds.cloneWithRows([])
    };

    this.objBranchMemberListController = new BranchMemberListController();
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      title: 'Branch Members',
      headerTitleStyle: { color: '#FFFFFF' },
      headerStyle: { backgroundColor: '#28417D' },
      headerBackTitleStyle: { backgroundColor: '#FFFFFF' },
      headerLeft: (
        <TouchableHighlight style={styles.btnNavBackStyle} underlayColor="rgba(255,255,255,0.15)" onPress={() => params.onBack()}>
          <Image source={require('../res/images/back_white.png')} style={styles.imageNavBackStyle} />
        </TouchableHighlight>
      )
    };
  }

  _handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected });
  };

  tapOnBack() {
    this.props.navigation.goBack();
  }

  componentWillMount() {

    this.objBranchMemberListController.openDBSchema();
  }

  componentDidMount() {

    NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange );
    NetInfo.isConnected.fetch().done( (isConnected) => { this.setState({ isConnected }); } );
    this.props.navigation.setParams({ onBack: this.tapOnBack.bind(this) });

    const { params = {} } = this.props.navigation.state;

    setTimeout(() => {
      try {
        this.objBranchMemberListController.loadBranceMembers(params.branch);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.objBranchMemberListController.getBranchMembers()),
          isRefreshing: false
        });
      } catch (e) {
        alert('Error: ' + e);
      }
    }, 300);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener( 'change', this._handleConnectivityChange );
  }

  memberRegisterCallback(branchMember) {

    try {
      this.objBranchMemberListController.addBranch(branchMember);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.objBranchMemberListController.getBranchMembers())
      });
    } catch (e) {
      alert('Error: ' + e);
    }
  }

  actionOnAddBranch() {
    const { params = {} } = this.props.navigation.state;
    this.props.navigation.navigate('BranchMemberCreate', { branch: params.branch, registerCallback: this.memberRegisterCallback.bind(this) });
  }

  actionOnViewBranchMember() {
    // this.props.navigation.navigate('BranchMemberViewList')
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true
    });

    try {
      this.objBranchMemberListController.loadBranceMembers();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.objBranchMemberListController.getBranchMembers()),
        isRefreshing: false
      });
    } catch (e) {
      alert('Error: ' + e);
    }
  }

  registerRequest() {

  }

  branchHeaderView(branch) {
    return (
      <View style={styles.viewContentContainer}>
        <Text style={styles.txtContentHeader}>{branch.branchName}</Text>
        {(branch.taluk != '') && <Text style={styles.txtContent}>{branch.taluk}</Text>}
        {(branch.district != '') && <Text style={styles.txtContent}>{branch.district}</Text>}
        {(branch.panchayath != '') && <Text style={styles.txtContent}>{branch.panchayath}</Text>}
        {(branch.village != '') && <Text style={styles.txtContent}>{branch.village}</Text>}
        {(branch.place != '') && <Text style={styles.txtContent}>{branch.place}</Text>}
        {(branch.pinCode != '') && <Text style={styles.txtContent}>{branch.pinCode}</Text>}
      </View>
    );
  }

  render() {
    const { params = {} } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        {/*<BranchView branch={params.branch} />*/}
        {this.branchHeaderView(params.branch)}
        <View style={{ height: 10, backgroundColor: '#2D5596' }} />
        <ListView
          style={styles.listViewStyle}
          removeClippedSubviews={false}
          enableEmptySections={true}
          showsVerticalscrollIndicator={false}
          dataSource={this.state.dataSource}
          renderRow={(data) =>
            <BranchMember
              branchMember={data}
              actionOnViewBranchMember={this.actionOnViewBranchMember.bind(this)} />
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
          underlayColor="rgba(0,0,0,0)" >
          <Image style={styles.imageAddStyle} source={require('../res/images/add.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

BranchMemberViewList.propTypes = {
  navigation: PropTypes.object
};

module.exports = BranchMemberViewList;
