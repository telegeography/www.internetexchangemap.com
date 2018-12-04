import $ from 'jquery';
/* global IxMap */
/* global GeoJSON */

export function initialize( application ) {
  application.set('map', null);
  application.set('exchangesList', null);
  application.set('buildings', null);
  application.set('apiUrl', '/api/v2');
  application.set('getSlug', function(model){
    var slug = null;
    if(!model.slug){
      slug = model;
    }else{
      slug = model.slug;
    }
    return slug;
  });
  
  application.deferReadiness();
  $.getJSON(IxMap.Map.buildingsGeojson, function(data){
    application.buildings = new GeoJSON(data);
    application.advanceReadiness();
  });
  
}

export default {
  initialize
};
