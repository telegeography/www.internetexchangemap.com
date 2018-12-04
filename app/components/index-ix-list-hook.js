import Component from '@ember/component';
import { getOwner } from '@ember/application';

export default Component.extend({
  didInsertElement(){
    this._super(...arguments);
    let applicationInstance = getOwner(this).application;
    if(applicationInstance.map){
      applicationInstance.map.showAllBuildings();
    }
  }
});
