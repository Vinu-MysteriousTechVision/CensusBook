'use strict';

import React from 'react';
import {
  Platform,
  StatusBar,
  NativeModules
} from 'react-native';
import ImageResizer from 'react-native-image-resizer';

var moment = require('moment');

function getStatusBarHeight() {
  var statusBarHeight = 0;
  if (Platform.OS === 'android') {
    if (Platform.Version >= 21) {
      statusBarHeight = StatusBar.currentHeight;
    } else {
      statusBarHeight = 0;
    }
  } else {
    statusBarHeight = 30;
  }
  return statusBarHeight;
}

function getNavBarHeight() {
  var navBarHeight = getStatusBarHeight() + 50;
  return navBarHeight;
}

function getUniqueFileName(type, extension) {
  var name = type;
  try {
    var currentTimeMillis = moment();
    name = `${type}_${currentTimeMillis}_${getRandomInt(1, 99)}.${extension}`;
  } catch (error) {
    name = `${type}_.${extension}`;
  }
  return name;
}

/**
 * Returns a random integer between min (inclusive) and max (exclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getPlatform() {
  if (Platform.OS === 'android') {
    return PlatformOS.ANDROID;
  } else {
    return PlatformOS.IOS;
  }
}

var PlatformOS = {
  IOS: 1,
  ANDROID: 2
};

async function resizeImage(imageUri) {
  return await ImageResizer.createResizedImage(imageUri, 1024, 1024, 'JPEG', 100)
    .then((resizedImageUri) => {
      return resizedImageUri;
    }).catch((err) => {
      console.log("Error: "+err);
      return null;
    });
}

module.exports = {
  getStatusBarHeight,
  getNavBarHeight,
  getUniqueFileName,
  getRandomInt,
  PlatformOS,
  getPlatform,
  resizeImage
};
