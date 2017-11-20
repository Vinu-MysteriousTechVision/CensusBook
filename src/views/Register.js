import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  TextInput,
  Image,
  NetInfo,
  Keyboard
} from 'react-native';
import styles from '../style/RegisterStyle';
import PropTypes from 'prop-types';
import ScrollViewKeybordHandler from '../components/KeyboardAwareScrollView';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
      username: '',
      email: '',
      password: '',
      mobileNumber: ''
    };
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }

  _handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected });
  };

  _keyboardDidShow (e) {
    console.log(e);
  }

  _keyboardDidHide (e) {
    console.log(e);
  }

  tapOnBack() {
    this.props.navigation.goBack();
  }

  componentDidMount() {

    NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange );
    NetInfo.isConnected.fetch().done( (isConnected) => { this.setState({ isConnected }); } );
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener( 'change', this._handleConnectivityChange );
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  focusNextField = (nextField, nextFieldSubstitute = null) => {
    if (nextField) {
      nextField.focus();
      return;
    }

    if (nextFieldSubstitute) {
      nextFieldSubstitute.focus();
    }
  };

  registerRequest() {

  }

  render() {
    var profileIcon = require('../res/images/user_default.png');
    return(
      <View style={styles.container}>
        <ScrollViewKeybordHandler
          keyboardShouldPersistTaps={'always'}
          showsVerticalScrollIndicator={false}>
          <View style={styles.regHeaderStyle}>
            <View style={styles.menuHeaderImageBoarder}>
              <Image style={styles.menuHeaderimage}
                source={profileIcon} />
            </View>
            <Text ellipsizeMode="tail"  numberOfLines={1} style={styles.menuHeaderLabel}>Jon Doe</Text>
          </View>
          <View style={styles.registerContainer}>
            <View style={styles.fieldContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.fieldIcon} source={require('../res/images/usr_blue.png')} />
              </View>
              <View style={styles.verticalSeperator} />
              <TextInput
                ref={(objUserName) => this.refUsername = objUserName}
                style={styles.txtInputStyle}
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
                editable={true}
                maxLength={100}
                placeholder="Username"
                placeholderTextColor='#37AADC'
                underlineColorAndroid="rgba(0,0,0,0)"
                returnKeyType="next"
                returnKeyLabel="次"
                keyboardType="email-address"
                blurOnSubmit={false}
                onSubmitEditing={() => this.focusNextField(this.refEmail)} />
            </View>
            <View style={styles.seperator} />
            <View style={styles.fieldContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.fieldIcon} source={require('../res/images/email_blue.png')} />
              </View>
              <View style={styles.verticalSeperator} />
              <TextInput
                ref={(objEmail) => this.refEmail = objEmail}
                style={styles.txtInputStyle}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
                editable={true}
                maxLength={100}
                placeholder="Email"
                placeholderTextColor='#37AADC'
                underlineColorAndroid="rgba(0,0,0,0)"
                returnKeyType="next"
                returnKeyLabel="次"
                keyboardType="email-address"
                blurOnSubmit={false}
                onSubmitEditing={() => this.focusNextField(this.refPassword)} />
            </View>
            <View style={styles.seperator} />
            <View style={styles.fieldContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.fieldIcon} source={require('../res/images/pwd_blue.png')} />
              </View>
              <View style={styles.verticalSeperator} />
              <TextInput
                ref={(objPassword) => this.refPassword = objPassword}
                style={styles.txtInputStyle}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                editable={true}
                maxLength={100}
                placeholder="Password"
                placeholderTextColor='#37AADC'
                underlineColorAndroid="rgba(0,0,0,0)"
                returnKeyType="next"
                returnKeyLabel="次"
                blurOnSubmit={false}
                onSubmitEditing={() => this.focusNextField(this.refMobileNumber)} />
            </View>
            <View style={styles.seperator} />
            <View style={styles.fieldContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.fieldIcon} source={require('../res/images/contactNum.png')} />
              </View>
              <View style={styles.verticalSeperator} />
              <TextInput
                ref={(objMobileNumber) => this.refMobileNumber = objMobileNumber}
                style={styles.txtInputStyle}
                onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
                value={this.state.mobileNumber}
                editable={true}
                maxLength={100}
                placeholder="Mobile number"
                placeholderTextColor='#37AADC'
                underlineColorAndroid="rgba(0,0,0,0)"
                returnKeyType="next"
                returnKeyLabel="次"
                blurOnSubmit={false} />
            </View>
            <View style={styles.seperator} />
          </View>
          <View style={styles.btnRegisterContainer}>
            <TouchableHighlight style={styles.btnRegister} underlayColor="rgba(255,255,255,0.15)" onPress={this.registerRequest.bind(this)}>
              <Text style={styles.txtRegButton} numberOfLines={1}>Register</Text>
            </TouchableHighlight>
          </View>
        </ScrollViewKeybordHandler>
        <View style={styles.btnNavBackContainer} >
          <TouchableHighlight style={styles.btnNavBackStyle}
            underlayColor="rgba(255,255,255,0.15)"
            onPress={() => this.tapOnBack()}>
            <Image source={require('../res/images/back_white.png')} style={styles.imageNavBackStyle} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Register.propTypes = {
  navigation: PropTypes.object
};

module.exports = Register;
