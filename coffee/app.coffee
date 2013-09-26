App = Ember.Application.create
        analytics: (path) ->
          _gaq.push(['_trackPageview', path]) if _gaq
        map: null, 
        exchangesList: null, 
        buildings: null,
        apiUrl: "api/v1",
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
  didInsertElement: () ->
    if !App.map
      App.set('map', new IxMap.Map('map', new google.maps.LatLng(30.0, -30.0), 3, App.buildings))

App.Router.map () ->
  this.route("internet-exchange", { path: "/internet-exchange/:slug" })
  this.route("building", { path: "/building/:slug" })
  this.route("metro-area", { path: "/metro-area/:slug" })
  this.route("country", { path: "/country/:slug" })

App.IndexRoute = Ember.Route.extend
  setupController: (controller, model) ->
    App.analytics("/#/")
    App.exchangesList = IxMap.Map.showAllExchanges() if !App.exchangesList
    controller.set("model",  App.exchangesList)

App.InternetExchangeRoute = Ember.Route.extend
  setupController: (controller, model) ->
    App.analytics("/#/internet-exchange/#{App.getSlug(model)}")
    jQuery.getJSON "#{App.apiUrl}/internet-exchanges/#{App.getSlug(model)}.js", (data) ->
      controller.set "model",  data
      App.map.lookupExchangeForMap(data.id)

App.BuildingRoute = Ember.Route.extend
  setupController: (controller, model) ->
    App.analytics("/#/building/#{App.getSlug(model)}")
    jQuery.getJSON "#{App.apiUrl}/buildings/#{App.getSlug(model)}.js", (data) ->
      controller.set("model",  data)
      App.map.lookupBuildingForMap(App.getSlug(data.id))

App.MetroAreaRoute = Ember.Route.extend
  setupController: (controller, model) ->
    App.analytics("/#/metro-area/#{App.getSlug(model)}")
    jQuery.getJSON "#{App.apiUrl}/metro-areas/#{App.getSlug(model)}.js", (data) ->
      controller.set("model",  data)
      App.map.lookupCountryOrMetroAreaForMap(data.id, "metro_area")

App.CountryRoute = Ember.Route.extend
  setupController: (controller, model) ->
    App.analytics("/#/country/#{App.getSlug(model)}")
    jQuery.getJSON "#{App.apiUrl}/countries/#{App.getSlug(model)}.js", (data) ->
      controller.set("model",  data)
      App.map.lookupCountryOrMetroAreaForMap(data.id, "country")

App.IndexView = Ember.View.extend
  listItemView: Ember.View.extend 
    templateName: 'exchange-list-item'
  didInsertElement: () ->
    App.map.showAllBuildings()
 
App.BuildingView = Ember.View.extend
  buildingView: Ember.View.extend
    templateName: 'building-address-view',

App.InterfaceView = Ember.View.extend
  listItemView: Ember.View.extend
    templateName: 'building-address',
    tagName: "span",
    mouseEnter: (e) ->
      if jQuery(e.target).context.tagName == "A"
        App.map.highlightExchangeBuildingFromList(jQuery(e.target).attr('href').split("/")[2])
    mouseLeave: (e) ->
      App.map.infoBox.close()

App.InternetExchangeView = App.InterfaceView
App.CountryView = App.InterfaceView
App.MetroAreaView = App.InterfaceView