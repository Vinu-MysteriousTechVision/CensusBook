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

class BranchMember extends Component {
  actionOnAddBranchMember() {
    if (this.props.actionOnAddBranchMember) {
      this.props.actionOnAddBranchMember();
    }
  }

  actionOnViewBranchMember() {
    if (this.props.actionOnViewBranchMember) {
      this.props.actionOnViewBranchMember();
    }
  }

  render() {
    var address = 'Kuriyedath Parambhil (H)\nChenthuruthy\nP.O: Malapallipuram';
    return (
      <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#d6efff'}}>
        <View style={{ height: 5, backgroundColor: '#11c1ff'}}/>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 5 }}>
          <Text>Vinu</Text>
          <Text>20/01/1990 : 27</Text>
          <Text>{address}            </Text>
          <Text>Father          : Venu</Text>
          <Text>Mother          : Vasanthy</Text>
          <Text>Qualification   : MCA</Text>
          <Text>Job             : Software Engineer</Text>
          <TouchableHighlight style={{ position: 'absolute', height: 44, width: 44, right: 15, bottom: 69, justifyContent: 'center', alignItems: 'center' }}
            onPress={this.actionOnViewBranchMember.bind(this)}
            underlayColor="rgba(0,0,0,0)"
          >
            <Text>View</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ position: 'absolute', height: 44, width: 44, right: 15, bottom: 15, justifyContent: 'center', alignItems: 'center' }}
            onPress={this.actionOnAddBranchMember.bind(this)}
            underlayColor="rgba(0,0,0,0)"
          >
            <Text>Add</Text>
          </TouchableHighlight>
        </View>
        <View style={{ height: 1, backgroundColor: 'gray'}}/>
      </View>
    )
  }
}

module.exports = BranchMember;
