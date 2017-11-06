'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width; //full width

class Branch extends Component {

  actionOnViewBranchMember() {
    if (this.props.actionOnViewBranchMember) {
      this.props.actionOnViewBranchMember();
    }
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#d6efff'}}>
        <View style={{ height: 5, backgroundColor: '#11c1ff'}}/>
        <TouchableHighlight onPress={this.actionOnViewBranchMember.bind(this)} underlayColor="rgba(0,0,0,0)">
        <View style={{backgroundColor: 'red', flexDirection: 'row'}}>
          <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 5 }}>
            <Text>KYS Branch No: 14</Text>
            <Text>Kodungallur</Text>
            <Text>Chenthuruthy</Text>
            <Text>Thrissur</Text>
            <Text>Poyya</Text>
            <Text>Pallipuram</Text>
            <View style={{backgroundColor: 'red'}}>
            </View>

          </View>
          <View style={{width: 30, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
          <Text>></Text>
          </View>

        </View>

        </TouchableHighlight>
        <View style={{ height: 1, backgroundColor: 'gray'}}/>
      </View>
    )
  }
}

module.exports = Branch;
