'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../style/DataListStyle';

class Branch extends Component {

  actionOnSelectData() {
    if (this.props.actionOnSelectData) {
      this.props.actionOnSelectData();
    }
  }

  render() {
    const { data, selectData } = this.props;
    return (
      <View style={styles.containerListView}>
        <TouchableHighlight style={styles.btnContainer} onPress={this.actionOnSelectData.bind(this)} underlayColor="rgba(0,0,0,0)">
          <View style={styles.btnView}>
            <View style={styles.textContainer}>
              <Text >{data}</Text>
            </View>
            <View style={styles.imageContainerSelction}>
              <Image source={require('../res/images/tick.png')} style={styles.imageRightArrow} />
            </View>
          </View>

        </TouchableHighlight>
        <View style={styles.seperator} />
      </View>
    );
  }
}

Branch.propTypes = {
  actionOnSelectData: PropTypes.func,
  data: PropTypes.String,
  selectData: PropTypes.array
};

module.exports = Branch;
