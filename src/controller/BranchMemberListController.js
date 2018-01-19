const Realm = require('realm');
import _ from 'underscore';
import Schema from '../dataBase/Schema';

export default class BranchMemberListController {
  constructor() {
    this.dataBase = null;
    this.aryBrancheMembers = [];
  }

  openDBSchema() {
    try {
      return new Promise((resolve, reject) => {
        Realm.open({
          schema: [Schema.BranchMemberSchema]
        }).then(dbObj => {
          this.dataBase = dbObj;
          resolve('success');
        });
      });
    } catch (e) {
      /* Empty Error */
    }

  }

  loadBranceMembers(branch) {
    var objBrancheMembers = null;
    if (!_.isUndefined(branch) && !_.isNull(branch)) {
      objBrancheMembers =  this.dataBase.objects('BranchMember').filtered('branchId = $0', branch.id);
    }

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
