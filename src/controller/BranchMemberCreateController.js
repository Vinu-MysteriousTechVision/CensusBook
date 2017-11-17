const Realm = require('realm');
import Schema from '../dataBase/Schema';

export default class BranchMemberCreateController {
  constructor() {
    this.dataBase = null;
    this.aryBranches = [];
    this.branchMember = null;
  }

  openDBSchema() {
    Realm.open({
      schema: [Schema.BranchMemberSchema]
    }).then(dbObj => {
      this.dataBase = dbObj;
    });
  }

  createBranchMember(branchMember) {
    this.dataBase.write(() => {
      this.branchMember = this.dataBase.create('BranchMember',
        {
          name: branchMember.name,
          houseName: branchMember.houseName,
          place: branchMember.place,
          postalName: branchMember.postalName,
          pincode: branchMember.pincode,
          dateOfBirth: branchMember.dateOfBirth,
          fatherName: branchMember.fatherName,
          motherName: branchMember.motherName,
          qualification: branchMember.qualification,
          job: branchMember.job
        }
      );
    });
  }

  getBranchMember() {
    return this.branchMember;
  }
}
