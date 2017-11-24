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
    var nextId = 0;
    if (this.getLastPrimaryKey() != null) {
      nextId = this.getLastPrimaryKey() + 1;
    }

    this.dataBase.write(() => {
      this.branchMember = this.dataBase.create('BranchMember',
        {
          id: nextId,
          branchId: branchMember.branch_id,
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

  getLastPrimaryKey() {
    const objBrancheMembers =  this.dataBase.objects('BranchMember');
    if (objBrancheMembers.length > 0) {
      return objBrancheMembers[objBrancheMembers.length - 1].id;
    }
    return 0;
  }
}
