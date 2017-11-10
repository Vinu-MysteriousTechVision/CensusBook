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
        {/*<View style={{ height: 1, backgroundColor: '#11c1ff'}}/>*/}
        <TouchableHighlight onPress={this.actionOnViewBranchMember.bind(this)} underlayColor="rgba(0,0,0,0)">
        <View style={{backgroundColor: 'transparent', flexDirection: 'row'}}>
          <View style={{width: 10, backgroundColor: '#11c1ff', justifyContent: 'center', alignItems: 'center'}}/>
          <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 10 }}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>KYS Branch No: 14</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>Kodungallur</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>Chenthuruthy</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>Thrissur</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>Poyya</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>Pallipuram</Text>
            <View style={{backgroundColor: 'red'}}>
            </View>

          </View>
          <View style={{width: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{ width: 10, height: 20 }} source={require('../res/images/right.png')} />
          </View>

        </View>

        </TouchableHighlight>
        <View style={{ height: 1, backgroundColor: 'gray'}}/>
      </View>
    )
  }
}

module.exports = Branch;
