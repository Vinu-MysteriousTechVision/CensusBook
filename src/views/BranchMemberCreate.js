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
import Utils from '../utils/Utils';
import ScrollViewKeybordHandler from '../components/KeyboardAwareScrollView';

var width = Dimensions.get('window').width - 80; //Menu width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#062D2D',
    backgroundColor: '#FCFCFC',
    justifyContent: 'flex-start',
    padding: 10
  },
  seperator: {
    height: 0.5,
    marginBottom: 20,
    backgroundColor: '#37AADC',
    backgroundColor: '#002887'
  },
  registerContainer: {
    backgroundColor: 'transparent'
  },
  btnRegister: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#37B4F0',
    backgroundColor: '#14DC96',
    backgroundColor: '#001956'
  }
});
class branchMemberCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
      branchName: '',
      email: '',
      password: '',
      mobileNumber: ''
    };
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      title: 'Add Branch Member',
      headerTitleStyle: { color: '#FFFFFF'},
      headerStyle: {backgroundColor: '#062D2D'},
      headerBackTitleStyle: {backgroundColor: '#FFFFFF'},
      headerLeft: (
        <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, backgroundColor: 'transparent'}} underlayColor="rgba(255,255,255,0.15)"
        onPress={() => params.onBack()}>
          <Image style={{ width: 16, height: 16 }} source={require('../res/images/back_white.png')} />
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
    this.refBranchname.focus();
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
    var profileIcon = require('../res/images/user_default.png');
    return(
      <View style={styles.container}>
        <ScrollViewKeybordHandler keyboardShouldPersistTaps={'always'}>
        <View style={[styles.registerContainer, {backgroundColor: 'transparent'}]}>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Branch Name</Text>
          <TextInput
            ref={(objUserName) => this.refBranchname = objUserName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(branchName) => this.setState({branchName})}
            value={this.state.branchName}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            keyboardType="email-address"
            blurOnSubmit={false}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Branch No</Text>
          <TextInput
            ref={(objUserName) => this.refUsername = objUserName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            keyboardType="email-address"
            blurOnSubmit={false}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Taluk</Text>
          <TextInput
            ref={(objUserName) => this.refUsername = objUserName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            keyboardType="email-address"
            blurOnSubmit={false}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >District</Text>
          <TextInput
            ref={(objUserName) => this.refUsername = objUserName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            keyboardType="email-address"
            blurOnSubmit={false}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Panchayath</Text>
          <TextInput
            ref={(objUserName) => this.refUsername = objUserName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            keyboardType="email-address"
            blurOnSubmit={false}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Vilage</Text>
          <TextInput
            ref={(objUserName) => this.refUsername = objUserName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            keyboardType="email-address"
            blurOnSubmit={false}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Place</Text>
          <TextInput
            ref={(objUserName) => this.refUsername = objUserName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            keyboardType="email-address"
            blurOnSubmit={false}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Pin code</Text>
          <TextInput
            ref={(objUserName) => this.refUsername = objUserName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            keyboardType="email-address"
            blurOnSubmit={false}
          />
          <View style={styles.seperator}/>
        </View>
        <View style={[styles.btnRegister]}>
          <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}} underlayColor="rgba(255,255,255,0.15)" onPress={this.registerRequest.bind(this)}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}} numberOfLines={1}>Add</Text>
          </TouchableHighlight>
        </View>
        </ScrollViewKeybordHandler>
      </View>
    );
  }
}

module.exports = branchMemberCreate;
