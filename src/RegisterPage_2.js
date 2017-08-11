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
  Dimensions
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import Utils from './utils/Utils';

var width = Dimensions.get('window').width - 80; //Menu width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#062D2D',
    justifyContent: 'center',
    padding: 40
  },
  seperator: {
    height: 0.5,
    marginBottom: 20,
    backgroundColor: '#37AADC'
  },
  fieldContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  registerContainer: {
    backgroundColor: 'transparent'
  },
  btnRegister: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#37B4F0',
    backgroundColor: '#14DC96'
  },
  imageContainer: {
    height:50,
    width: 50,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fieldIcon: {
    height:25,
    width: 25,
    backgroundColor:'transparent'
  },
  verticalSeperator: {
    height: 30,
    width: 0.5,
    backgroundColor: '#37AADC'
  },
  menuHeaderImageBoarder: {
    width: 106,
    height: 106,
    backgroundColor: '#E1E1E1',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 53
  },
  menuHeaderimage: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 100,
    borderRadius: 50,
    width: 100,
    backgroundColor: 'transparent'
  },
  menuHeaderLabel: {
    height: 20,
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  }
});
class RegisterPage_2 extends React.Component {
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
      headerStyle: {backgroundColor: '#062D2D', height: 0},
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
    var profileIcon = require('./res/images/user_default.png');
    return(
      <View style={styles.container}>
        <View style={{height: 150, backgroundColor: 'transparent', padding: 5}}>
          <View style={styles.menuHeaderImageBoarder}>
            <Image style={styles.menuHeaderimage}
              source={profileIcon}
            />
          </View>
          <Text ellipsizeMode="tail"  numberOfLines={1} style={styles.menuHeaderLabel}>Jon Doe</Text>
        </View>
        <View style={styles.registerContainer}>
          <View style={styles.fieldContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.fieldIcon} source={require('./res/images/usr_blue.png')} />
            </View>
            <View style={styles.verticalSeperator} />

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
          <View style={styles.fieldContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.fieldIcon} source={require('./res/images/pwd_blue.png')} />
            </View>
            <View style={styles.verticalSeperator} />
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
          <View style={styles.seperator}/>
          <View style={styles.fieldContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.fieldIcon} source={require('./res/images/pwd_blue.png')} />
            </View>
            <View style={styles.verticalSeperator} />
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
          <View style={styles.seperator}/>
          <View style={styles.fieldContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.fieldIcon} source={require('./res/images/pwd_blue.png')} />
            </View>
            <View style={styles.verticalSeperator} />
            <TextInput
              ref={(objUserName) => this.refUsername = objUserName}
              style={{flex:1, height: 44, margin: 5, backgroundColor: 'transparent'}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              editable={true}
              maxLength={100}
              placeholder="Mobile number"
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

module.exports = RegisterPage_2;
