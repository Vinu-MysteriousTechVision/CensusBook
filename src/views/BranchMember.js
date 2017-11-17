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

  actionOnViewBranchMember() {
    if (this.props.actionOnViewBranchMember) {
      this.props.actionOnViewBranchMember();
    }
  }

  onShowDetailImageView() {

  }

  onLoadProfileIcon() {

  }

  render() {
    const profileIcon = require('../res/images/user_default.png');
    var address = 'Kuriyedath Parambhil (H)\nChenthuruthy\nP.O: Malapallipuram';
    return (
      <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#d6efff' }}>
        <TouchableHighlight onPress={this.actionOnViewBranchMember.bind(this)} underlayColor="rgba(0,0,0,0)">
          <View>

            <View style={{ height: 5, backgroundColor: '#11c1ff' }} />
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 5 }}>
              <View style={{ flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'flex-start' }}>
                <View style={{ width: 100, height: 100, backgroundColor: 'transparent', justifyContent: 'center' }}>
                  <TouchableHighlight  style={{ alignSelf: 'center', justifyContent: 'center', height: 80, borderRadius: 40, width: 80, backgroundColor: 'gray' }}
                    onPress={this.onShowDetailImageView.bind(this)} underlayColor='transparent'>
                    <Image style={{ alignSelf: 'center', justifyContent: 'center', height: 78, borderRadius: 39, width: 78, backgroundColor: 'transparent' }}
                      source={profileIcon} onLoadEnd={this.onLoadProfileIcon.bind(this)} />
                  </TouchableHighlight>

                </View>
                <View style={{ backgroundColor: 'transparent', height: 20, justifyContent: 'flex-start', paddingLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Vinu</Text>
                  <Text style={{ fontWeight: 'normal', fontSize: 12 }}>{address}</Text>
                  <View style={{ flexDirection: 'row', backgroundColor: 'transparent', height: 20, justifyContent: 'flex-start' }}>
                    <Text style={{ width: 100, fontWeight: 'normal', fontSize: 12, backgroundColor: 'transparent' }}>20/01/1990</Text>
                    <Text style={{ marginLeft: 10, fontWeight: 'normal', fontSize: 12 }}>27</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', backgroundColor: 'transparent', height: 20, justifyContent: 'flex-start' }}>
                <Text style={{ width: 100, backgroundColor: 'transparent', fontWeight: 'normal', fontSize: 12 }}>Father</Text>
                <Text style={{ marginLeft: 10, fontWeight: 'normal', fontSize: 12 }}>Venu</Text>
              </View>
              <View style={{ flexDirection: 'row', backgroundColor: 'transparent', height: 20, justifyContent: 'flex-start' }}>
                <Text style={{ width: 100, backgroundColor: 'transparent', fontWeight: 'normal', fontSize: 12 }}>Mother</Text>
                <Text style={{ marginLeft: 10, fontWeight: 'normal', fontSize: 12 }}>Vasanthy</Text>
              </View>
              <View style={{ flexDirection: 'row', backgroundColor: 'transparent', height: 20, justifyContent: 'flex-start' }}>
                <Text style={{ width: 100, backgroundColor: 'transparent', fontWeight: 'normal', fontSize: 12 }}>Qualification</Text>
                <Text style={{ marginLeft: 10, fontWeight: 'normal', fontSize: 12 }}>MCA</Text>
              </View>
              <View style={{ flexDirection: 'row', backgroundColor: 'transparent', height: 20, justifyContent: 'flex-start' }}>
                <Text style={{ width: 100, backgroundColor: 'transparent', fontWeight: 'normal', fontSize: 12 }}>Job</Text>
                <Text style={{ marginLeft: 10, fontWeight: 'normal', fontSize: 12 }}>Software Engineer</Text>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: 'gray' }} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = BranchMember;
