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
import { BranchMember } from '../entities';
var width = Dimensions.get('window').width - 80; //Menu width
const Realm = require('realm');
import Schema from '../dataBase/Schema';

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
      name: '',
      houseName: '',
      place: '',
      postalName: '',
      pincode: '',
      dateOfBirth: '',
      fatherName: '',
      motherName: '',
      qualification: '',
      job: ''
    };

    this.dataBase = null;
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
    this.refName.focus();

    Realm.open({
      schema: [Schema.BranchMemberSchema]
    }).then(dbObj => {
      this.dataBase = dbObj
    });

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

    var branchMember = {
      name: 'Vinu',
      houseName: 'Kuriyedath Parambhil',
      place: 'Chenthuruthy',
      postalName: 'malapallipuram',
      pincode: '680732',
      dateOfBirth: '20/01/1990',
      fatherName: 'Venu',
      motherName: 'Vasansthy',
      qualification: 'MCA',
      job: 'Software Engineer'
    }

    var regBranchMemberObj = {
      'branchMember' : branchMember
    }

    var objBranchMemeber = new BranchMember(regBranchMemberObj['branchMember']);

    this.dataBase.write(() => {
      this.dataBase.create('BranchMember',
        {
          name: this.state.name,
          houseName: this.state.houseName,
          place: this.state.place,
          postalName: this.state.postalName,
          pincode: this.state.pincode,
          dateOfBirth: this.state.dateOfBirth,
          fatherName: this.state.fatherName,
          motherName: this.state.motherName,
          qualification: this.state.qualification,
          job: this.state.job
        }
      );
    });
    let dbObjBranch =  this.dataBase.objects('BranchMember');


    const { params = {} } = this.props.navigation.state
    if (params.registerCallback) {
      params.registerCallback(dbObjBranch);
    }
    this.tapOnBack();
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

  render() {
    const { navigate } = this.props.navigation;
    var profileIcon = require('../res/images/user_default.png');
    return(
      <View style={styles.container}>
        <ScrollViewKeybordHandler keyboardShouldPersistTaps={'always'}>
        <View style={[styles.registerContainer, {backgroundColor: 'transparent'}]}>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Name</Text>
          <TextInput
            ref={(objName) => this.refName = objName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: 'transparent', color: 'gray'}}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refHouseName)}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Address</Text>
          <TextInput
            ref={(objHouseName) => this.refHouseName = objHouseName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: 'transparent', color: 'gray'}}
            onChangeText={(houseName) => this.setState({houseName})}
            value={this.state.houseName}
            editable={true}
            maxLength={100}
            placeholder="House name"
            placeholderTextColor= 'gray'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refPlace)}
          />
          <View style={[styles.seperator, {marginBottom: 0}]}/>
          <TextInput
            ref={(objPlace) => this.refPlace = objPlace}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: 'transparent', color: 'gray'}}
            onChangeText={(place) => this.setState({place})}
            value={this.state.place}
            editable={true}
            maxLength={100}
            placeholder="Place"
            placeholderTextColor= 'gray'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refPostalName)}
          />
          <View style={[styles.seperator, {marginBottom: 0}]}/>
          <TextInput
            ref={(objPostalName) => this.refPostalName = objPostalName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: 'transparent', color: 'gray'}}
            onChangeText={(postalName) => this.setState({postalName})}
            value={this.state.postalName}
            editable={true}
            maxLength={100}
            placeholder="Postal Name"
            placeholderTextColor= 'gray'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refPincode)}
          />
          <View style={[styles.seperator, {marginBottom: 0}]}/>
          <TextInput
            ref={(objPincode) => this.refPincode = objPincode}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: 'transparent', color: 'gray'}}
            onChangeText={(pincode) => this.setState({pincode})}
            value={this.state.pincode}
            editable={true}
            maxLength={100}
            placeholder="Pincode"
            placeholderTextColor= 'gray'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refDOB)}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Date Of Birth</Text>
          <TextInput
            ref={(objDateOfBirth) => this.refDOB = objDateOfBirth}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent', color: '#FFFFFF'}}
            onChangeText={(dateOfBirth) => this.setState({dateOfBirth})}
            value={this.state.dateOfBirth}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refFatherName)}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Father Name</Text>
          <TextInput
            ref={(objFatherName) => this.refFatherName = objFatherName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: 'transparent', color: 'gray'}}
            onChangeText={(fatherName) => this.setState({fatherName})}
            value={this.state.fatherName}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refMotherName)}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Mother Name</Text>
          <TextInput
            ref={(objMotherName) => this.refMotherName = objMotherName}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: 'transparent', color: 'gray'}}
            onChangeText={(motherName) => this.setState({motherName})}
            value={this.state.motherName}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refQualification)}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Qualification</Text>
          <TextInput
            ref={(objQualification) => this.refQualification = objQualification}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: 'transparent', color: 'gray'}}
            onChangeText={(qualification) => this.setState({qualification})}
            value={this.state.qualification}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refJob)}
          />
          <View style={styles.seperator}/>
          <Text style= {{ color: '#37AADC', fontSize: 16, marginLeft: 5 }} >Job</Text>
          <TextInput
            ref={(objJob) => this.refJob = objJob}
            style={{height: 44, margin: 5, justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: 'transparent', color: 'gray'}}
            onChangeText={(job) => this.setState({job})}
            value={this.state.job}
            editable={true}
            maxLength={100}
            placeholder=""
            placeholderTextColor= '#37AADC'
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType="next"
            returnKeyLabel="次"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField(this.refMotherName)}
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
