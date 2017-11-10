// @flow

export class Branch {

  constructor(json: JSON) {
    const obj = json || {};
    /*
    'branchName': 'KSS Branch No.14',
    'branchNo' : '14',
    'taluk' : 'Kodungallur',
    'district' : 'Thrissur',
    'panchayath': 'Poyya',
    'village': 'Pallipuram',
    'place': 'Chanthuruthy',
    'pinCode': '680732'

    */

    this.branchName = obj['branchName'];
    this.branchNo = obj['branchNo'] || '';
    this.taluk = obj['taluk'] || '';
    this.district = obj['district'] || '';
    this.panchayath = obj['panchayath'] || '';
    this.village = obj['village'] || '';
    this.place = obj['place'] || '';
    this.pinCode = obj['pinCode'] || '';
  }
}
