const Realm = require('realm');
import Schema from '../dataBase/Schema';
import BranchMemberListController from '../controller/BranchMemberListController';

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

  loadBranches() {

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

  syncBranches() {
    this.objBranchMemberListController = new BranchMemberListController();
    this.objBranchMemberListController.openDBSchema()
      .then((value) =>{
        const objBranches =  this.dataBase.objects('Branch').filtered('isSynced = $0', false);
        var branches = [];
        for (var i = 0; i < objBranches.length; i++) {
          const branch = objBranches[i];
          const branchMembers = [];
          this.objBranchMemberListController.loadBranceMembers(branch);
          branchMembers.push(this.objBranchMemberListController.getBranchMembers());

          branches.push({
            'branch': branch,
            'BranchMembers': branchMembers
          });
        }
        console.log('Array Length: ' + JSON.stringify(branches));
      });
  }

}
