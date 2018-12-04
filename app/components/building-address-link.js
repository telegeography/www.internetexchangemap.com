import Component from '@ember/component';
import { getOwner } from '@ember/application';
import $ from 'jquery';

export default Component.extend({
  didInsertElement(){
    this._super(...arguments);
    let applicationInstance = getOwner(this).application;
    let marker_offset = this.get('building.marker_offset');
    $(this.element).find('div.building-marker').css("background", "url(/assets/images/markers.png) no-repeat -" + marker_offset + "px 0px");
    $(this.element).find('div.building-address a').mouseenter(function() {
      applicationInstance.map.highlightExchangeBuildingFromList($(this).attr('href').split("/")[2]);
    }).mouseout(function() {
      applicationInstance.map.infoBox.close();
    });
  }
});
