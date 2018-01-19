'use strict';
import React from 'react';
import {
  AsyncStorage
} from 'react-native';

import Constant from '../utils/Constants';
import _ from 'underscore';

async function getHeader(isBeforeLogin) {
  var header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  if (isBeforeLogin) return header;
  try {
    var value = await AsyncStorage.getItem(Constant.AUTH_ACCESS_DETAILS);
    if(!_.isUndefined(value) && !_.isNull(value)) {
      var json = JSON.parse(value);
      header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Token': json["Access-Token"],
        'Client': json["Client"],
        'Uid': json["Uid"]
      };
    }
    return header;
  } catch (error) {
    return header;
  }
}

async function getPostHeader(isBeforeLogin) {
  var header = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data'
  };
  if (isBeforeLogin) return header;
  try {
    var value = await AsyncStorage.getItem(Constant.AUTH_ACCESS_DETAILS);
    if(!_.isUndefined(value) && !_.isNull(value)) {
      var json = JSON.parse(value);
      header = {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Access-Token': json["Access-Token"],
        'Client': json["Client"],
        'Uid': json["Uid"]
      };
    }
    return header;
  } catch (error) {
    return header;
  }
}

module.exports = {
  getHeader,
  getPostHeader
};
