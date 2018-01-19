import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  TextInput,
  Image,
  NetInfo,
  Keyboard,
  StatusBar,
  Platform,
  Dimensions
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginController from './LoginController';
import styles from '../style/LoginStyle';
import PropTypes from 'prop-types';

var height = Dimensions.get('window').height; //full height

function getScrollViewHeight() {
  var scrollHeight = 0;
  if (Platform.OS === 'android') {
    if (Platform.Version >= 21) {
      scrollHeight = height;
    } else {
      scrollHeight = height - 25;
    }
  } else {
    scrollHeight = height;
  }
  return scrollHeight;
}

const resetAction = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({ routeName: 'Authorized' })
  ]
});

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
      username: '',
      password: '',
      scrollActive: false
    };

    this.objLoginController = new LoginController();
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }

  _handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected });
  };

  _keyboardDidShow (e) {
    this.setState({ scrollActive: true });
  }

  _keyboardDidHide (e) {
    try {
      this._scrollViewKeybordHandler.refs._rnkasv_keyboardView.scrollTo({ y: 0 });
      this.setState({ scrollActive: false });
    } catch(error) {
      /* */
    }
  }

  tapOnBack() {
    this.props.navigation.goBack();
  }

  componentDidMount() {

    NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectivityChange );
    NetInfo.isConnected.fetch().done( (isConnected) => { this.setState({ isConnected }); } );

    this.props.navigation.setParams({ onBack: this.tapOnBack.bind(this) });
  }

  componentWillMount() {

    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount() {

    NetInfo.isConnected.removeEventListener( 'connectionChange', this._handleConnectivityChange );
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  loginSuccessCallback() {
    this.props.navigation.dispatch(resetAction);
  }

  loginErrorCallback() {
    alert('error');
  }

  loginRequest() {
    this.objLoginController.loginRequest('vinu11@gmail.com', 'qwerty', this.loginSuccessCallback.bind(this), this.loginErrorCallback.bind(this));
  }

  tapOnRegister() {
    this.props.navigation.navigate('Register');
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0)" barStyle="light-content" />
        <KeyboardAwareScrollView
          ref={(obj) => this._scrollViewKeybordHandler = obj}
          scrollEnabled={this.state.scrollActive}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.scrollViewLayout, { height: getScrollViewHeight() } ]}
          keyboardShouldPersistTaps={'always'}>

          <View style={styles.topContainer} />
          <View style={styles.bottomContainer}>
            <View style={styles.loginContainer}>
              <View style={styles.userName}>
                <View style={styles.txtInputIconContainer}>
                  <Image style={styles.imgTxtInputIcon} source={require('../res/images/usr_blue.png')} />
                </View>
                <View style={styles.verticalSeperator} />
                <TextInput
                  ref={(objUserName) => this.refUsername = objUserName}
                  style={styles.txtInputStyle}
                  onChangeText={(username) => this.setState({ username })}
                  value={this.state.username}
                  editable={true}
                  maxLength={100}
                  placeholder="Username or Email"
                  placeholderTextColor='#FFFFFF'
                  underlineColorAndroid="rgba(0,0,0,0)"
                  returnKeyType="next"
                  returnKeyLabel="次"
                  keyboardType="email-address"
                  blurOnSubmit={false} />
              </View>
              <View style={styles.seperator} />
              <View style={styles.passWord}>
                <View style={styles.txtInputIconContainer}>
                  <Image style={styles.imgTxtInputIcon} source={require('../res/images/pwd_blue.png')} />
                </View>
                <View style={styles.verticalSeperator} />
                <TextInput
                  ref={(objUserName) => this.refUsername = objUserName}
                  style={styles.txtInputStyle}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                  editable={true}
                  maxLength={100}
                  placeholder="Password"
                  placeholderTextColor='#FFFFFF'
                  underlineColorAndroid="rgba(0,0,0,0)"
                  returnKeyType="next"
                  returnKeyLabel="次"
                  keyboardType="email-address"
                  blurOnSubmit={false} />
              </View>
              <View style={styles.seperator} />
            </View>
            <View style={styles.btnSignInContainer}>
              <TouchableHighlight style={styles.btnSignIn} underlayColor="rgba(255,255,255,0.15)" onPress={this.loginRequest.bind(this)}>
                <Text style={styles.txtSignInButton} numberOfLines={1}>Sign In</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.btnNavBackContainer} >
            <TouchableHighlight style={styles.btnNavBackStyle}
              underlayColor="rgba(255,255,255,0.15)"
              onPress={() => this.tapOnBack()}>
              <Image source={require('../res/images/back_white.png')} style={styles.imageNavBackStyle} />
            </TouchableHighlight>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object
};
