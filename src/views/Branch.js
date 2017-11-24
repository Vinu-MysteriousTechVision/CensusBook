'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../style/BranchStyle';

class Branch extends Component {

  actionOnViewBranchMember() {
    if (this.props.actionOnViewBranchMember) {
      this.props.actionOnViewBranchMember();
    }
  }

  render() {
    const { branch } = this.props;
    var branchName = 'KSS ' + branch.branchName + ',' + branch.branchNo;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.actionOnViewBranchMember.bind(this)} underlayColor="rgba(0,0,0,0)">
          <View style={[styles.btnBranchContainer]}>
            <View style={styles.viewContentContainer}>
              <Text style={styles.txtContentHeader}>{branchName}</Text>
              {(branch.taluk != '') && <Text style={styles.txtContent}>{branch.taluk}</Text>}
              {/*{(branch.district != '') && <Text style={styles.txtContent}>{branch.district}</Text>}
              {(branch.panchayath != '') && <Text style={styles.txtContent}>{branch.panchayath}</Text>}
              {(branch.village != '') && <Text style={styles.txtContent}>{branch.village}</Text>}
              {(branch.place != '') && <Text style={styles.txtContent}>{branch.place}</Text>}
              {(branch.pinCode != '') && <Text style={styles.txtContent}>{branch.pinCode}</Text>}*/}
            </View>
            <View style={styles.viewRightArrow}>
              <Image source={require('../res/images/right.png')} style={styles.imageRightArrow} />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

Branch.propTypes = {
  actionOnViewBranchMember: PropTypes.func,
  branch: PropTypes.object
};

module.exports = Branch;
