const Realm = require('realm');
import Schema from '../dataBase/Schema';

export default class BranchMemberListController {
  constructor() {
    this.dataBase = null;
    this.aryBrancheMembers = [];
  }

  openDBSchema() {
    Realm.open({
      schema: [Schema.BranchMemberSchema]
    }).then(dbObj => {
      this.dataBase = dbObj;
    });
  }

  loadBranceMembers() {

    const objBrancheMembers =  this.dataBase.objects('BranchMember');

    var tempArray = [];
    for (var i = 0; i < objBrancheMembers.length; i++) {
      tempArray.push(objBrancheMembers[i]);
    }
    this.aryBrancheMembers = tempArray;
  }

  getBranchMembers() {
    return this.aryBrancheMembers;
  }

  addBranch(branchMember) {
    this.aryBrancheMembers.push(branchMember);
  }

  updateBranch(branch) {
    this.dataBase.write(() => {
      branch.branchName = 'KMS';
    });
  }

}
