/*global google*/
/*global IxMap*/
import Component from '@ember/component';
import { getOwner } from '@ember/application';
import $ from 'jquery';

export default Component.extend({
  didInsertElement(){
    this._super(...arguments);
    let applicationInstance = getOwner(this).application;
    $('body').find('.ember-view').first().addClass('map-container');
    $('#map').parent().addClass('map-container');
    if(!applicationInstance.map){
      applicationInstance.set('map', new IxMap.Map('map', new google.maps.LatLng(30.0, -30.0), 3, applicationInstance.buildings));
      applicationInstance.set('search', new IxMap.Search());
    }
  }
});
