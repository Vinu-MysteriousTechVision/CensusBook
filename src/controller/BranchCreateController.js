const Realm = require('realm');
import Schema from '../dataBase/Schema';

export default class BranchCreateController {
  constructor() {
    this.dataBase = null;
    this.aryBranches = [];
    this.branch = null;
  }

  openDBSchema() {
    Realm.open({
      schema: [Schema.BranchSchema]
    }).then(dbObj => {
      this.dataBase = dbObj;
    });
  }

  createBranch(branch) {
    this.dataBase.write(() => {
      this.branch = this.dataBase.create('Branch',
        {
          branchName: branch.branchName,
          branchNo : branch.branchNo,
          taluk : branch.taluk,
          district : branch.district,
          panchayath: branch.panchayath,
          village: branch.village,
          place: branch.place,
          pinCode: branch.pinCode
        }
      );
    });
  }

  getBranch() {
    return this.branch;
  }
}
