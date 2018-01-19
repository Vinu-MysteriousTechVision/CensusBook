const Realm = require('realm');
import _ from 'underscore';
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

  validateBranch(branch) {
    try {
      return new Promise((resolve, reject) => {
        if (!_.isUndefined(branch) && !_.isNull()) {
          if (_.isEmpty(branch.branchName.trim())) {
            reject('Please enter branch name');
          }
          if (_.isEmpty(branch.branchNo.trim())) {
            reject('Please enter branch number');
          }
          resolve('success');
        } else {
          reject('error');
        }
      });
    } catch (e) {
      /* Empty Error */
    }
  }

  createBranch(branch) {

    try {
      return new Promise((resolve, reject) => {
        this.validateBranch(branch)
          .then((val) =>{
            // Get last id
            var nextId = 0;
            if (this.getLastPrimaryKey() != null) {
              nextId = this.getLastPrimaryKey() + 1;
            }
            // create new branch object
            this.dataBase.write(() => {
              this.branch = this.dataBase.create('Branch',
                {
                  id: nextId,
                  branchName: branch.branchName,
                  branchNo : branch.branchNo,
                  taluk : branch.taluk,
                  district : branch.district,
                  panchayath: branch.panchayath,
                  village: branch.village,
                  place: branch.place,
                  pinCode: branch.pinCode,
                  isSynced: branch.isSynced
                }
              );
            });
            resolve(val);
          })
          .catch((err) =>{
            reject(err);
          });
      });
    } catch (e) {
      /* Empty Error */
    }
  }

  getBranch() {
    return this.branch;
  }

  getLastPrimaryKey() {
    const objBranches =  this.dataBase.objects('Branch');
    if (objBranches.length > 0) {
      return objBranches[objBranches.length - 1].id;
    }
    return 0;
  }
}
