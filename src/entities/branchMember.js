// @flow

export class BranchMember {

  constructor(json: JSON) {
    const obj = json || {};
    /*
    name: 'Vinu',
    houseName: 'Kuriyedath Parambhil',
    place: 'Chenthuruthy',
    postalName: 'malapallipuram',
    pincode: '680732',
    dateOfBirth: '20/01/1990',
    fatherName: 'Venu',
    motherName: 'Vasansthy',
    qualification: 'MCA',
    jod: 'Software Engineer'

    */

    this.name = obj['name'];
    this.houseName = obj['houseName'] || '';
    this.place = obj['place'] || '';
    this.postalName = obj['postalName'] || '';
    this.pincode = obj['pincode'] || '';
    this.dateOfBirth = obj['dateOfBirth'] || '';
    this.fatherName = obj['fatherName'] || '';
    this.motherName = obj['motherName'] || '';
    this.qualification = obj['qualification'] || '';
    this.jod = obj['jod'] || '';
  }
}
