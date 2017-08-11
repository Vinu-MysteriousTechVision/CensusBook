
import React, { Component } from 'react';
import {
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  NetInfo,
  Keyboard,
  StatusBar,
  Platform,
  Dimensions
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import ScrollViewKeybordHandler from './components/KeyboardAwareScrollView';
import LoginController from './LoginController'
import Utils from './utils/Utils';

var width = Dimensions.get('window').width; //full width
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollViewLayout: {
    width: width,
    height: getScrollViewHeight(),
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'transparent'
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: '#37CDBE'
  },
  bottomContainer: {
    flex: 0.5,
    backgroundColor: 'gray',
  },
  loginContainer: {
    height: 100,
    backgroundColor: 'white'
  },
  btnSignIn: {
    flex: 0.25,
    backgroundColor: '#37B4F0'
  },
  signUpContainer: {
    flex: 0.25,
    backgroundColor: '#32E182'
  },
  seperator: {
    height: 0.5,
    backgroundColor: '#37AADC'
  },
  userName: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  passWord: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.15)",
  }
})

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})

class Login extends React.Component {
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

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      headerStyle: {backgroundColor: '#37CDBE', height: 0},
      headerLeft: (
        <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center',marginTop: Utils.getStatusBarHeight(), paddingLeft: 10, backgroundColor: 'transparent'}} underlayColor="rgba(255,255,255,0.15)"
        onPress={() => params.onBack()}>
          <Image style={{ width: 16, height: 16 }} source={require('./res/images/back_white.png')} />
        </TouchableHighlight>
      )
    }
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

    }
  }

  tapOnBack() {
    this.props.navigation.goBack();
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange );
    NetInfo.isConnected.fetch().done( (isConnected) => { this.setState({ isConnected }); } );

    this.props.navigation.setParams({ onBack: this.tapOnBack.bind(this) })
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

  loginSuccessCallback() {
    this.props.navigation.dispatch(resetAction)
  }

  loginErrorCallback() {
    alert('error');
  }

  loginRequest() {
    this.objLoginController.loginRequest('vinu11@gmail.com', 'qwerty', this.loginSuccessCallback.bind(this), this.loginErrorCallback.bind(this))
  }

  tapOnRegister() {
    this.props.navigation.navigate('Register');
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0)" barStyle="light-content" />
        <ScrollViewKeybordHandler
          ref={(obj) => this._scrollViewKeybordHandler = obj}
          scrollEnabled={this.state.scrollActive}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.scrollViewLayout ]}
          keyboardShouldPersistTaps={'always'}>

          <View style={styles.topContainer}>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.loginContainer}>
              <View style={styles.userName}>
                <View style={{height:50, width: 50, backgroundColor:'#E6F5F5', justifyContent: 'center', alignItems: 'center',}}>
                  <Image style={{height:30, width: 30, backgroundColor:'#E6F5F5'}} source={require('./res/images/usr_blue.png')} />
                </View>
                <TextInput
                  ref={(objUserName) => this.refUsername = objUserName}
                  style={{flex:1,height: 44, margin: 5, backgroundColor: 'transparent'}}
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
                  editable={true}
                  maxLength={100}
                  placeholder="Username or Email"
                  placeholderTextColor= '#37AADC'
                  underlineColorAndroid="rgba(0,0,0,0)"
                  returnKeyType="next"
                  returnKeyLabel="次"
                  keyboardType="email-address"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.seperator}>
              </View>
              <View style={styles.passWord}>
                <View style={{height:50, width: 50, backgroundColor:'#E6F5F5', justifyContent: 'center', alignItems: 'center',}}>
                  <Image style={{height:30, width: 30, backgroundColor:'#E6F5F5'}} source={require('./res/images/pwd_blue.png')} />
                </View>
                <TextInput
                  ref={(objUserName) => this.refUsername = objUserName}
                  style={{flex:1, height: 44, margin: 5, backgroundColor: 'transparent'}}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  editable={true}
                  maxLength={100}
                  placeholder="Password"
                  placeholderTextColor= '#37AADC'
                  underlineColorAndroid="rgba(0,0,0,0)"
                  returnKeyType="next"
                  returnKeyLabel="次"
                  keyboardType="email-address"
                  blurOnSubmit={false}
                />
              </View>
            </View>
            <View style={[styles.btnSignIn]}>
              <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={this.loginRequest.bind(this)}>
                <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}} numberOfLines={1}>Sign In</Text>
              </TouchableHighlight>
            </View>
            <View style={[styles.signUpContainer, {flexDirection: 'row'}]}>
              <View style={{flex: 0.4, backgroundColor:'#1E96A0'}}>
                <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={() => alert('click')}>
                  <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}} numberOfLines={2}>Forgot Password</Text>
                </TouchableHighlight>
              </View>
              <View style={{flex: 0.6, backgroundColor:'#2DC391'}}>
                <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={this.tapOnRegister.bind(this)}>
                  <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}} numberOfLines={1}>Sign Up</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollViewKeybordHandler>

      </View>
    );
  }
}

module.exports = Login;
