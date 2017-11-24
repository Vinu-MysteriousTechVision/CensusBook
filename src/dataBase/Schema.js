'use strict';

const BranchSchema = {
  name: 'Branch',
  primaryKey: 'id',
  properties: {
    id:         'int',    // primary key
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
  primaryKey: 'id',
  properties: {
    id:             'int',    // Primary key
    branchId:       'int',    // Foreign key
    name:           'string',
    houseName:      'string',
    place:          'string',
    postalName:     'string',
    pincode:        'string',
    dateOfBirth:    'string',
    fatherName:     'string',
    motherName:     'string',
    qualification:  'string',
    job:            'string'
  }
};

module.exports = {
  BranchSchema,
  BranchMemberSchema
};
