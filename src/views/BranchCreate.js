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
import { Branch } from '../entities';

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
  fieldContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent'
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
class BranchCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
      branchName: '',
      branchNo: '',
      taluk: '',
      district: '',
      panchayath: '',
      village: '',
      place: '',
      pinCode: ''
    };
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      title: 'Add Branche',
      headerTitleStyle: { color: '#FFFFFF'},
      headerStyle: {backgroundColor: '#062D2D'},
      headerBackTitleStyle: {backgroundColor: '#FFFFFF'},
      headerLeft: (
        <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, backgroundColor: 'transparent'}}
          underlayColor="rgba(255,255,255,0.15)"
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

    var branch = {
      'branchName': 'KSS Branch No.14',
      'branchNo' : '14',
      'taluk' : 'Kodungallur',
      'district' : 'Thrissur',
      'panchayath': 'Poyya',
      'village': 'Pallipuram',
      'place': 'Chanthuruthy',
      'pinCode': '680732'
    }

    var regBranchObj = {
      'branch' : branch
    }

    var objBranch = new Branch(regBranchObj['branch']);
    const { params = {} } = this.props.navigation.state
    if (params.registerCallback) {
      params.registerCallback(objBranch);
    }
    this.tapOnBack();

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
            ref={(objBranchName) => this.refBranchname = objBranchName}
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
            ref={(objBranchNo) => this.refBranchNo = objBranchNo}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(branchNo) => this.setState({branchNo})}
            value={this.state.branchNo}
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
            ref={(objTaluk) => this.refTaluk = objTaluk}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(taluk) => this.setState({taluk})}
            value={this.state.taluk}
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
            ref={(objDistrict) => this.refDistrict = objDistrict}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(district) => this.setState({district})}
            value={this.state.district}
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
            ref={(objPanchayath) => this.refPanchayath = objPanchayath}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(panchayath) => this.setState({panchayath})}
            value={this.state.panchayath}
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
            ref={(objVillage) => this.refVillage = objVillage}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(village) => this.setState({village})}
            value={this.state.village}
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
            ref={(objPlace) => this.refPlace = objPlace}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(place) => this.setState({place})}
            value={this.state.place}
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
            ref={(objPinCode) => this.refPinCode = objPinCode}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(pinCode) => this.setState({pinCode})}
            value={this.state.pinCode}
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
          <TouchableHighlight style= {{flex:1, justifyContent: 'center', alignItems: 'center'}}
            underlayColor="rgba(255,255,255,0.15)"
            onPress={this.registerRequest.bind(this)}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}} numberOfLines={1}>Add</Text>
          </TouchableHighlight>
        </View>
        </ScrollViewKeybordHandler>
      </View>
    );
  }
}

module.exports = BranchCreate;
