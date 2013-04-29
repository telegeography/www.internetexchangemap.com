App = Ember.Application.create
        map: null, 
        exchangesList: null, 
        buildings: null,
        getSlug: (model) -> 
          if !model.slug
            slug = model
          else
            slug = model.slug
          slug

App.deferReadiness()
jQuery.getJSON IxMap.Map.buildingsGeojson, (data) ->
  App.buildings = new GeoJSON(data)
  App.advanceReadiness()

App.ApplicationView = Ember.View.extend
  classNames: ['google-map']

App.Router.map () ->
  this.route("internet-exchange", { path: "/internet-exchange/" })
  this.route("internet-exchange", { path: "/internet-exchange/:slug" })
  this.route("building", { path: "/building/" })
  this.route("building", { path: "/building/:slug" })

App.IndexRoute = Ember.Route.extend
  setupController: (controller, model) ->
    if !App.exchangesList
      App.exchangesList = IxMap.Map.showAllExchanges()
      controller.set("model",  App.exchangesList)
    else
      controller.set("model",  App.exchangesList)

App.InternetExchangeRoute = Ember.Route.extend
  setupController: (controller, model) ->
    jQuery.getJSON "api/internet-exchanges/#{App.getSlug(model)}.js", (data) ->
      controller.set("model",  data)

App.BuildingRoute = Ember.Route.extend
  setupController: (controller, model) ->
    jQuery.getJSON "api/buildings/#{App.getSlug(model)}.js", (data) ->
      controller.set("model",  data);

App.IndexView = Ember.View.extend
  listItemView: Ember.View.extend 
    templateName: 'exchange-list-item',
  didInsertElement: () ->
    if !App.map 
      App.set('map', new IxMap.Map('map', new google.maps.LatLng(30.0, -30.0), 3, App.buildings))
    else
      App.map.showAllBuildings()
 
App.InternetExchangeController = Ember.ObjectController.extend {}

App.BuildingView = Ember.View.extend
  buildingView: Ember.View.extend
    templateName: 'building-address-view',
  willRerender: () ->
    App.map.lookupBuildingForMap this.get('controller.model')
  didInsertElement: () ->
    if !App.map
      App.set('map', new IxMap.Map('map', new google.maps.LatLng(30.0, -30.0), 3, App.buildings))
      App.map.lookupBuildingForMap(App.getSlug(this.get('controller.model')))
    else
      App.map.lookupBuildingForMap(App.getSlug(this.get('controller.model')))

App.InternetExchangeView = Ember.View.extend
  listItemView: Ember.View.extend
    templateName: 'building-address',
    tagName: "span",
    mouseEnter: (e) ->
      if jQuery(e.target).context.tagName == "A"
        App.map.highlightExchangeBuildingFromList(jQuery(e.target).attr('href').split("/")[2])
    mouseLeave: (e) ->
      App.map.infoBox.close()
  willRerender: () ->
    App.map.lookupExchangeForMap(this.get('controller.model'))
  didInsertElement: () ->
    if !App.map 
      App.set('map', new IxMap.Map('map', new google.maps.LatLng(30.0, -30.0), 3, App.buildings))
      App.map.lookupExchangeForMap(App.getSlug(this.get('controller.model')))
    else
      App.map.lookupExchangeForMap(App.getSlug(this.get('controller.model')))
