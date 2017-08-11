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
  StatusBar
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import Utils from './utils/Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37CDBE',
    justifyContent: 'center',
    padding: 20
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
  },
  registerContainer: {
    backgroundColor: 'white'
  },
  btnRegister: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#37B4F0'
  }
});
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
      username: '',
      password: ''
    };
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

  }

  _keyboardDidHide (e) {

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

  registerRequest() {

  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.registerContainer}>
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
              placeholder="Username"
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
              placeholder="Email"
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
              placeholder="Confirmation Password"
              placeholderTextColor= '#37AADC'
              underlineColorAndroid="rgba(0,0,0,0)"
              returnKeyType="next"
              returnKeyLabel="次"
              keyboardType="email-address"
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={[styles.btnRegister]}>
          <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={this.registerRequest.bind(this)}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}} numberOfLines={1}>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = Register;
