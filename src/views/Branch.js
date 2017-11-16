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
    const { branch } = this.props;
    return (
      <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#d6efff'}}>
        {/*<View style={{ height: 1, backgroundColor: '#11c1ff'}}/>*/}
        <TouchableHighlight onPress={this.actionOnViewBranchMember.bind(this)} underlayColor="rgba(0,0,0,0)">
        <View style={{backgroundColor: 'transparent', flexDirection: 'row'}}>
          <View style={{width: 10, backgroundColor: '#11c1ff', justifyContent: 'center', alignItems: 'center'}}/>
          <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 10 }}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>{branch.branchName}</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>{branch.taluk}</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>{branch.district}</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>{branch.panchayath}</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>{branch.village}</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>{branch.place}</Text>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>{branch.pinCode}</Text>
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
