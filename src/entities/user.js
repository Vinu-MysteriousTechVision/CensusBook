// @flow

export class User {

  constructor(json: JSON, fullInfo: boolean = false) {
    const obj = json || {};

    this.id = obj['id'];
    this.email = obj['email'] || '';
    this.full_name = obj['full_name'] || '';
    this.imageurl = obj['imageurl'] || '';
    this.thumbimage_url = obj['thumbimage_url'] || '';
    this.todohuken = obj['todohuken'] || '';
    this.shikuchoson = obj['shikuchoson'] || '';
    this.choiki = obj['choiki'] || '';
    if (fullInfo) {
      this.provider = obj['provider'] || '';
      this.birthday = obj['birthday'] || '';
      this.postal1 = obj['postal1'] || '';
      this.postal2 = obj['postal2'] || '';
      this.choume = obj['choume'];
      this.ban = obj['ban'];
      this.go = obj['go'];
      this.building_name = obj['building_name'] || '';
      this.roomnum = obj['roomnum'] || '';
    }
  }
}
