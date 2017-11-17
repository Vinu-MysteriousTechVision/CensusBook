'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../style/BranchMemberStyle';

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
      <View style={ styles.container}>
        <TouchableHighlight onPress={this.actionOnViewBranchMember.bind(this)} underlayColor="rgba(0,0,0,0)">
          <View>
            <View style={styles.viewTopBorder} />
            <View style={styles.btnViewContainer}>
              <View style={styles.viewTopContainer}>
                <View style={styles.viewProfileIconContainer}>
                  <TouchableHighlight  style={styles.btnProfileIcon}
                    onPress={this.onShowDetailImageView.bind(this)} underlayColor='transparent'>
                    <Image style={styles.imageProfileIcon}
                      source={profileIcon} onLoadEnd={this.onLoadProfileIcon.bind(this)} />
                  </TouchableHighlight>

                </View>
                <View style={styles.viewProfileDataConatiner}>
                  <Text style={styles.txtHeaderStyle}>Vinu</Text>
                  <Text style={styles.txtNormalStyle}>{address}</Text>
                  <View style={styles.viewRowStyle}>
                    <Text style={styles.txtKeyStyle}>20/01/1990</Text>
                    <Text style={styles.txtValueStyle}>27</Text>
                  </View>
                </View>
              </View>
              <View style={styles.viewRowStyle}>
                <Text style={styles.txtKeyStyle}>Father</Text>
                <Text style={styles.txtValueStyle}>Venu</Text>
              </View>
              <View style={styles.viewRowStyle}>
                <Text style={styles.txtKeyStyle}>Mother</Text>
                <Text style={styles.txtValueStyle}>Vasanthy</Text>
              </View>
              <View style={styles.viewRowStyle}>
                <Text style={styles.txtKeyStyle}>Qualification</Text>
                <Text style={styles.txtValueStyle}>MCA</Text>
              </View>
              <View style={styles.viewRowStyle}>
                <Text style={styles.txtKeyStyle}>Job</Text>
                <Text style={styles.txtValueStyle}>Software Engineer</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

BranchMember.propTypes = {
  actionOnViewBranchMember: PropTypes.func
};


module.exports = BranchMember;
