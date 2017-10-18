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
  actionOnAddBranch() {

  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 5, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 10}}>
        <Text>KYS Branch No: 14</Text>
        <Text>Kodungallur</Text>
        <Text>Chenthuruthy</Text>
        <Text>Thrissur</Text>
        <Text>Poyya</Text>
        <Text>Pallipuram</Text>
        <View style={{ height: 1, backgroundColor: 'gray'}}/>
        <TouchableHighlight style={{ position: 'absolute', height: 44, width: 44, right: 15, bottom: 69, justifyContent: 'center', alignItems: 'center' }}
          onPress={this.actionOnAddBranch.bind(this)}
          underlayColor="rgba(0,0,0,0)"
        >
          <Text>View</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ position: 'absolute', height: 44, width: 44, right: 15, bottom: 15, justifyContent: 'center', alignItems: 'center' }}
          onPress={this.actionOnAddBranch.bind(this)}
          underlayColor="rgba(0,0,0,0)"
        >
          <Text>Add</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

module.exports = Branch;
