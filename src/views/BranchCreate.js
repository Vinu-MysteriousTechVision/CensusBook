import React from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  TextInput,
  Image,
  NetInfo,
  Keyboard
} from 'react-native';
import ScrollViewKeybordHandler from '../components/KeyboardAwareScrollView';
import styles from '../style/BranchCreateStyle';
import PropTypes from 'prop-types';
import BranchCreateController from '../controller/BranchCreateController';

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

    this.objBranchCreateController = new BranchCreateController();
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      title: 'Add Branche',
      headerTitleStyle: { color: '#FFFFFF' },
      headerStyle: { backgroundColor: '#4187F5' },
      headerBackTitleStyle: { backgroundColor: '#FFFFFF' },
      headerLeft: (
        <TouchableHighlight style={styles.btnNavBackStyle}
          underlayColor="rgba(255,255,255,0.15)"
          onPress={() => params.onBack()}>
          <Image source={require('../res/images/back_white.png')} style={styles.imageNavBackStyle} />
        </TouchableHighlight>
      )
    };
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

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));

    this.objBranchCreateController.openDBSchema();
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange );
    NetInfo.isConnected.fetch().done( (isConnected) => { this.setState({ isConnected }); } );

    this.props.navigation.setParams({ onBack: this.tapOnBack.bind(this) });
    this.refBranchname.focus();
  }


  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener( 'change', this._handleConnectivityChange );
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  registerRequest() {

    var branch = {
      'branchName': this.state.branchName,
      'branchNo' : this.state.branchNo,
      'taluk' : this.state.taluk,
      'district' : this.state.district,
      'panchayath': this.state.panchayath,
      'village': this.state.village,
      'place': this.state.place,
      'pinCode': this.state.pinCode
    };
    this.objBranchCreateController.createBranch(branch);

    const { params = {} } = this.props.navigation.state;
    if (params.registerCallback) {
      params.registerCallback(this.objBranchCreateController.getBranch());
    }
    this.tapOnBack();
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollViewKeybordHandler keyboardShouldPersistTaps={'always'}>
          <View style={[styles.registerContainer]}>
            <Text style={styles.lblFieldTitleStyle} >Branch Name</Text>
            <TextInput
              ref={(objBranchName) => this.refBranchname = objBranchName}
              style={styles.txtInputStyle}
              onChangeText={(branchName) => this.setState({ branchName })}
              value={this.state.branchName}
              editable={true}
              maxLength={100}
              placeholder=""
              placeholderTextColor='#37AADC'
              underlineColorAndroid="rgba(0,0,0,0)"
              returnKeyType="next"
              returnKeyLabel="次"
              keyboardType="email-address"
              blurOnSubmit={false} />
            <View style={styles.seperator} />
            <Text style={styles.lblFieldTitleStyle} >Branch No</Text>
            <TextInput
              ref={(objBranchNo) => this.refBranchNo = objBranchNo}
              style={styles.txtInputStyle}
              onChangeText={(branchNo) => this.setState({ branchNo })}
              value={this.state.branchNo}
              editable={true}
              maxLength={100}
              placeholder=""
              placeholderTextColor='#37AADC'
              underlineColorAndroid="rgba(0,0,0,0)"
              returnKeyType="next"
              returnKeyLabel="次"
              keyboardType="email-address"
              blurOnSubmit={false} />
            <View style={styles.seperator} />
            <Text style={styles.lblFieldTitleStyle} >Taluk</Text>
            <TextInput
              ref={(objTaluk) => this.refTaluk = objTaluk}
              style={styles.txtInputStyle}
              onChangeText={(taluk) => this.setState({ taluk })}
              value={this.state.taluk}
              editable={true}
              maxLength={100}
              placeholder=""
              placeholderTextColor='#37AADC'
              underlineColorAndroid="rgba(0,0,0,0)"
              returnKeyType="next"
              returnKeyLabel="次"
              keyboardType="email-address"
              blurOnSubmit={false} />
            <View style={styles.seperator} />
            <Text style={styles.lblFieldTitleStyle} >District</Text>
            <TextInput
              ref={(objDistrict) => this.refDistrict = objDistrict}
              style={styles.txtInputStyle}
              onChangeText={(district) => this.setState({ district })}
              value={this.state.district}
              editable={true}
              maxLength={100}
              placeholder=""
              placeholderTextColor='#37AADC'
              underlineColorAndroid="rgba(0,0,0,0)"
              returnKeyType="next"
              returnKeyLabel="次"
              keyboardType="email-address"
              blurOnSubmit={false} />
            <View style={styles.seperator} />
            <Text style={styles.lblFieldTitleStyle} >Panchayath</Text>
            <TextInput
              ref={(objPanchayath) => this.refPanchayath = objPanchayath}
              style={styles.txtInputStyle}
              onChangeText={(panchayath) => this.setState({ panchayath })}
              value={this.state.panchayath}
              editable={true}
              maxLength={100}
              placeholder=""
              placeholderTextColor='#37AADC'
              underlineColorAndroid="rgba(0,0,0,0)"
              returnKeyType="next"
              returnKeyLabel="次"
              keyboardType="email-address"
              blurOnSubmit={false} />
            <View style={styles.seperator} />
            <Text style={styles.lblFieldTitleStyle} >Vilage</Text>
            <TextInput
              ref={(objVillage) => this.refVillage = objVillage}
              style={styles.txtInputStyle}
              onChangeText={(village) => this.setState({ village })}
              value={this.state.village}
              editable={true}
              maxLength={100}
              placeholder=""
              placeholderTextColor='#37AADC'
              underlineColorAndroid="rgba(0,0,0,0)"
              returnKeyType="next"
              returnKeyLabel="次"
              keyboardType="email-address"
              blurOnSubmit={false} />
            <View style={styles.seperator} />
            <Text style={styles.lblFieldTitleStyle} >Place</Text>
            <TextInput
              ref={(objPlace) => this.refPlace = objPlace}
              style={styles.txtInputStyle}
              onChangeText={(place) => this.setState({ place })}
              value={this.state.place}
              editable={true}
              maxLength={100}
              placeholder=""
              placeholderTextColor='#37AADC'
              underlineColorAndroid="rgba(0,0,0,0)"
              returnKeyType="next"
              returnKeyLabel="次"
              keyboardType="email-address"
              blurOnSubmit={false} />
            <View style={styles.seperator} />
            <Text style={styles.lblFieldTitleStyle} >Pin code</Text>
            <TextInput
              ref={(objPinCode) => this.refPinCode = objPinCode}
              style={styles.txtInputStyle}
              onChangeText={(pinCode) => this.setState({ pinCode })}
              value={this.state.pinCode}
              editable={true}
              maxLength={100}
              placeholder=""
              placeholderTextColor='#37AADC'
              underlineColorAndroid="rgba(0,0,0,0)"
              returnKeyType="next"
              returnKeyLabel="次"
              keyboardType="email-address"
              blurOnSubmit={false} />
            <View style={styles.seperator} />
          </View>
          <View style={[styles.btnRegisterContainer]}>
            <TouchableHighlight style={styles.btnRegister}
              underlayColor="rgba(255,255,255,0.15)"
              onPress={this.registerRequest.bind(this)}>
              <Text style={styles.txtButtonRegister} numberOfLines={1}>Add</Text>
            </TouchableHighlight>
          </View>
        </ScrollViewKeybordHandler>
      </View>
    );
  }
}

BranchCreate.propTypes = {
  navigation: PropTypes.object
};

module.exports = BranchCreate;


/*
var branch = {
  'branchName': 'KSS Branch No.14',
  'branchNo' : '14',
  'taluk' : 'Kodungallur',
  'district' : 'Thrissur',
  'panchayath': 'Poyya',
  'village': 'Pallipuram',
  'place': 'Chanthuruthy',
  'pinCode': '680732'
};

var regBranchObj = {
  'branch' : branch
};

var objBranch = new Branch(regBranchObj['branch']);
*/
