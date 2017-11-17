const Realm = require('realm');
import Schema from '../dataBase/Schema';

export default class BranchListController {
  constructor() {
    this.dataBase = null;
    this.aryBranches = [];
  }

  openDBSchema() {
    Realm.open({
      schema: [Schema.BranchSchema]
    }).then(dbObj => {
      this.dataBase = dbObj;
    });
  }

  loadBrances() {

    const objBranches =  this.dataBase.objects('Branch');

    var tempArray = [];
    for (var i = 0; i < objBranches.length; i++) {
      tempArray.push(objBranches[i]);
    }
    this.aryBranches = tempArray;
  }

  getBranches() {
    return this.aryBranches;
  }

  addBranch(branch) {
    this.aryBranches.push(branch);
  }

  updateBranch(branch) {
    this.dataBase.write(() => {
      branch.branchName = 'KMS';
    });
  }

}
