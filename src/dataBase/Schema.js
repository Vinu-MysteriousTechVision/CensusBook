'use strict';

const BranchSchema = {
  name: 'Branch',
  properties: {
    branchName: 'string',
    branchNo:   'string',
    taluk:      'string',
    district:   'string',
    panchayath: 'string',
    village:    'string',
    place:      'string',
    pinCode:    'string'
  }
};

const BranchMemberSchema = {
  name: 'BranchMember',
  properties: {
    name: 'string',
    houseName: 'string',
    place: 'string',
    postalName: 'string',
    pincode: 'string',
    dateOfBirth: 'string',
    fatherName: 'string',
    motherName: 'string',
    qualification: 'string',
    job: 'string'
  }
};

module.exports = {
  BranchSchema,
  BranchMemberSchema
}
