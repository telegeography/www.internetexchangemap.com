window.IxMap = {}

class IxMap.Search

  @featuresJson: 'javascripts/features.json'
  @searchJson: 'javascripts/search.json' 
  @searchFieldId: '#search'
  @exchangeLatLons: []

  lookupFromSearchTerm: (@searchName) -> 
    jQuery.getJSON IxMap.Search.featuresJson, (data) =>
      @map.clearAllBuildings()
      @map.currentSearchValue = @searchName
      exchanges = []
      @map.bounds(jQuery.map data, (exchange, i) =>
        if exchange.search_name == @searchName
          exchanges.push(exchange.building_id)
          {latitude:exchange.latitude, longitude:exchange.longitude})
      @map.showSearchBuildings(exchanges)
      jQuery(IxMap.Search.searchFieldId).val("Search").blur()

  constructor: (@map) ->
    jQuery.getJSON IxMap.Search.searchJson, (data) =>
      jQuery(IxMap.Search.searchFieldId).autocomplete {
      position: {my: "right top", at: "right bottom" },
      source: data,
      select: (event, ui) => @lookupFromSearchTerm(ui.item.value)
      }
    jQuery(IxMap.Search.searchFieldId).val("Search").focus(() ->
      jQuery(this).addClass("focus")
      jQuery(this).val("") if jQuery(this).val() == "Search"
    ).blur( () ->
      jQuery(this).removeClass("focus").val("Search")
    )


class IxMap.Information
  
  @informationMarkupId: "#information"
  @markerPath: 'images/markers.png'

  @clearInfo: () ->
    jQuery(IxMap.Information.informationMarkupId).empty()

  @exchangeListLink: (map) ->
    jQuery(IxMap.Information.informationMarkupId).append(
      jQuery("<div/>").attr("class","exchange-link").html(jQuery("<a/>").attr("href","javascript:").html("Internet Exchange List")).click(map, 
        (event) ->
          map.showAllExchanges()
          map.showAllBuildings()
      )
    )

  @exchangeName: (map) ->
    exchangeInfo = null
    for building in map.buildings
      for exchange in building.geojsonProperties.exchanges
        if exchange.address[0] == map.currentSearchValue
          exchangeInfo = exchange
          break
      if exchangeInfo?
        break
    jQuery(IxMap.Information.informationMarkupId).append(
      jQuery("<h2/>").attr("class","search-result-name").html(map.currentSearchValue)
    ).append(
      jQuery("<div/>").attr("class","exchange").attr("id","exchange-0}").append(jQuery("<div/>").addClass("exchange-icon")).append(
        infoDiv = jQuery("<div/>").addClass("exchange-information")
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html(exchangeInfo['contact_one'])) if exchangeInfo['contact_one']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").append(jQuery("<a/>").attr("href","mailto:#{exchangeInfo['email']}").html(exchangeInfo['email']))) if exchangeInfo['email']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html(exchangeInfo['telephone'])) if exchangeInfo['telephone']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html(jQuery("<a/>").attr("href",exchangeInfo['url']).attr("onclick","window.open(this.href,'ix-new-window');return false;").html("Website"))) if exchangeInfo['url']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html("Member: #{exchangeInfo['euro_affiliation']}")) if exchangeInfo['euro_affiliation']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html("Online since: #{exchangeInfo['date_online']}")) if exchangeInfo['date_online']?
      )
    )

  @appendExchangesAvailable: () ->
    jQuery(IxMap.Information.informationMarkupId).append(
      jQuery("<h2/>").attr("class","exchanges-available").html("IXes located in this building:")
    )

  @appendSelectedBuilding: () ->
    jQuery(IxMap.Information.informationMarkupId).append(jQuery("<h2/>").attr("class","exchanges-available").html("Selected Building:"))

  @appendBuildingInfo: (obj) ->
    jQuery(IxMap.Information.informationMarkupId).append(
      jQuery("<div/>").attr("class","building").attr("id","building-#{obj.building.geojsonProperties.building_id}").append(
          if obj.letter?
            jQuery("<div/>").attr("class","building-marker").attr("style","background:url(#{@markerPath}) no-repeat -#{(obj.letter+1)*22}px 0;")
          else
            jQuery("<div/>").addClass("building-icon")
        ).append(
          jQuery("<div/>").attr("class","building-info").append(
            jQuery("<div/>").attr("class","building-address").append(
              linkToBuilding = jQuery("<a/>").attr("href","javascript:void(0);").click(obj,
                (event) -> 
                  obj.map.selectBuildingFromList(obj.map.currentSearchValue, obj.building, if obj.letter? then 'red' else 'blue')
              ).mouseout(obj, (event) -> obj.map.infoBox.close())
              for address in obj.building.geojsonProperties.address
                linkToBuilding.append(jQuery("<div>").text(address).html() + "<br/>")
              )
          )
        ).append(jQuery("<div/>").attr("style","clear:both;"))
        
      )

  @appendExchangeInfo: (exchangeInfo) ->
    jQuery(IxMap.Information.informationMarkupId).append(
      jQuery("<div/>").attr("class","exchange-listing").attr("id","exchange-#{exchangeInfo['index']}").append(
        jQuery("<div/>").attr("class","exchange-name").append(
          jQuery("<a/>").attr("href","javascript:void(0);").html(exchangeInfo['name']).click(exchangeInfo, (event) -> exchangeInfo['search'].lookupFromSearchTerm(exchangeInfo['name']))
        ).append(jQuery("<div/>").attr("style","clear:both;"))
      )
    )

  @appendBuildingExchangeInfo: (exchangeInfo) ->
    jQuery(IxMap.Information.informationMarkupId).append(
      jQuery("<div/>").attr("class","exchange").attr("id","exchange-#{exchangeInfo['index']}").append(jQuery("<div/>").addClass("exchange-icon")).append(
        jQuery("<div/>").attr("class","exchange-name").append(
          jQuery("<a/>").attr("href","javascript:void(0);").click(exchangeInfo,
            (event) -> 
              exchangeInfo['search'].lookupFromSearchTerm(exchangeInfo['exchange']['address'][0])
          ).html("#{exchangeInfo['exchange']['address'][0]}".replace /\(.+?\)/,"")
        )
      ).append(
        infoDiv = jQuery("<div/>").addClass("exchange-info")
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html(exchangeInfo['exchange']['contact_one'])) if exchangeInfo['exchange']['contact_one']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").append(jQuery("<a/>").attr("href","mailto:#{exchangeInfo['exchange']['email']}").html(exchangeInfo['exchange']['email']))) if exchangeInfo['exchange']['email']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html(exchangeInfo['exchange']['telephone'])) if exchangeInfo['exchange']['telephone']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html(jQuery("<a/>").attr("href",exchangeInfo['exchange']['url']).attr("onclick","window.open(this.href,'ix-new-window');return false;").html("Website"))) if exchangeInfo['exchange']['url']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html("Member: #{exchangeInfo['exchange']['euro_affiliation']}")) if exchangeInfo['exchange']['euro_affiliation']?
        infoDiv.append(jQuery("<div/>").attr("class","exchange-contact").html("Online since: #{exchangeInfo['exchange']['date_online']}")) if exchangeInfo['exchange']['date_online']?
      )
    )

class IxMap.Map

  @buildingsGeojson: 'javascripts/buildings.geojson'
  @exchangesListJson: 'javascripts/search.json'
  @alphabet: "abcdefghijklmnopqrstuvwxyz".split("")
  @iconObj: {url:'images/markers.png',size:new google.maps.Size(22,29),origin:new google.maps.Point(0,0)}


  showAllExchanges: () =>
    IxMap.Information.clearInfo()
    jQuery.getJSON IxMap.Map.exchangesListJson, (data) => 
      @exchangeList = data
      for exchange, i in @exchangeList
        IxMap.Information.appendExchangeInfo({name: exchange, search: @search, index: i })

  selectBuildingFromList: (name, building, color = 'blue') ->
    this.infoBox.close()
    infoMarkup = jQuery('<div/>').addClass("#{color}-info-box-content").append(jQuery('<div/>').addClass("#{color}-info-box-pointer"))
    infoMarkup.append(jQuery("<strong/>").text(name)).append("<br/>") if name? and name != ""
    @gmap.panTo(building.position)
    for addr in building.geojsonProperties.address
      infoMarkup.append(jQuery("<div/>").text(addr))
    this.infoBox.setContent(jQuery('<div/>').append(infoMarkup).html())
    this.infoBox.setPosition(building.position)
    this.infoBox.open(@gmap)

  clearAllBuildings: () =>
    IxMap.Information.clearInfo()
    @infoBox.close()
    for building in @buildings
      google.maps.event.clearListeners building, 'click'
      building.setIcon(IxMap.Map.iconObj)
      building.setMap(null)

  onClickMapEvent: () =>
    google.maps.event.addListener @gmap, 'click', (event) =>
      @infoBox.close()
      @clearAllBuildings()
      @currentSearchValue = ''
      for building in @buildings
        @setMarkerEventListener(building)
        building.setMap(@gmap)
      @showAllExchanges()

  setMarkerEventListener: (building) =>
    google.maps.event.addListener building, 'click', (event) =>
      IxMap.Information.clearInfo()
      IxMap.Information.exchangeListLink(this)
      IxMap.Information.appendSelectedBuilding()
      @selectBuildingFromList(building.geojsonProperties.name, building)
      IxMap.Information.appendBuildingInfo({map:this, building:building})
      IxMap.Information.appendExchangesAvailable() if building.geojsonProperties.exchanges
      for exchange, i in building.geojsonProperties.exchanges
        IxMap.Information.appendBuildingExchangeInfo({exchange: exchange, search: @search, index: i })

  setSearchResultMarkerEventListener: (building) ->
    google.maps.event.addListener building, 'click', (event) =>
      @infoBox.close()
      @selectBuildingFromList(@currentSearchValue, building, 'red')

  showSearchBuildings: (exchange) ->
    IxMap.Information.clearInfo()
    IxMap.Information.exchangeListLink(this)
    IxMap.Information.exchangeName(this)
    x = 0
    for building in @buildings
      if included = building.geojsonProperties.building_id in exchange
        building.setIcon({url:'images/markers.png',size:new google.maps.Size(22,29),origin:new google.maps.Point((x+1)*22,0)})
        IxMap.Information.appendBuildingInfo({map:this, building:building, letter:x})
        @setSearchResultMarkerEventListener(building)
        building.setMap(@gmap)
        x++

  showAllBuildings: ()->
    @clearAllBuildings() if @buildings
    jQuery.getJSON IxMap.Map.buildingsGeojson, (data) =>
      @buildings = new GeoJSON(data)
      for building in @buildings
        @setMarkerEventListener(building)
        building.setIcon(IxMap.Map.iconObj)
        building.setMap(@gmap)


  bounds: (exchangeLatLons) -> 
    if exchangeLatLons.length > 1
      cableBounds = new google.maps.LatLngBounds()
      for point in exchangeLatLons
        cableBounds.extend(new google.maps.LatLng(point.latitude, point.longitude))
      @gmap.fitBounds(cableBounds);
    else
      @gmap.setCenter(new google.maps.LatLng(exchangeLatLons[0].latitude,exchangeLatLons[0].longitude));
      @gmap.setZoom(10)

  constructor: (@element, @center, @zoom) ->
    @gmap = new google.maps.Map(document.getElementById(@element), { 
      zoom: @zoom,
      maxZoom: 20,
      minZoom: 2,
      styles: [{featureType: "all",elementType: "all", stylers: [{ "gamma": 1.7 }]}],
      center: @center
      mapTypeId: google.maps.MapTypeId.ROADMAP
    })
    @currentSearchValue = ''
    @infoBox = new InfoBox({closeBoxURL:"",alignBottom:true,pixelOffset:new google.maps.Size(-60,-45)})
    @showAllBuildings()
    @onClickMapEvent()
    @showAllExchanges()
    @search = new IxMap.Search(this)
    return this

jQuery(document).ready ->
  map = new IxMap.Map('map', new google.maps.LatLng(30.0,-30.0), 3)
