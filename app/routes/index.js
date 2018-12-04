/* global IxMap */
import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    let applicationInstance = getOwner(this).application;
    if(!applicationInstance.exchangesList){
      applicationInstance.exchangesList = IxMap.Map.showAllExchanges();
    }
    controller.set("model",  applicationInstance.exchangesList);
  }
});
