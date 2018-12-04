import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';
import $ from 'jquery';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    let applicationInstance = getOwner(this).application;
    $.getJSON(`${applicationInstance.apiUrl}/buildings/${applicationInstance.getSlug(model)}.js`, function(data){
      controller.set("model",  data);
      applicationInstance.map.lookupBuildingForMap(applicationInstance.getSlug(data.id));
    });
  }
  
});
