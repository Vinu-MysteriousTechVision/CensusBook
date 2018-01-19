'use strict';
import React, { Component } from 'react';
import {
  TouchableHighlight,
  RefreshControl,
  ListView,
  Image,
  View
} from 'react-native';
import DataListView from './DataListView';
import colors from '../utils/Color';
import styles from '../style/DataListStyle';
import BranchListController from '../controller/BranchListController';
import PropTypes from 'prop-types';
import StaticData from '../dataBase/StaticData';

class DataList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isRefreshing: false,
      dataSource: ds.cloneWithRows([])
    };
  }

  static navigationOptions = () => {
    return {
      title: 'Course',
      headerTitleStyle: { color: '#FFFFFF' },
      headerStyle: { backgroundColor: '#28417D' }
    };
  }

  actionOnSelectData() {

  }

  componentWillMount() {

  }

  componentDidMount(){
    setTimeout(() => {
      try {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(StaticData.ConstantData.course)
        });
      } catch (e) {
        alert('Error: ' + e);
      }
    }, 300);
  }

  componentWillUnmount(){

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
            <DataListView
              data={data}
              selectData={[]}
              actionOnSelectData={this.actionOnSelectData.bind(this, data)} />
          } />
      </View>
    );
  }
}

DataList.propTypes = {
  navigation: PropTypes.object
};

module.exports = DataList;
