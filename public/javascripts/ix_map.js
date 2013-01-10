// Generated by CoffeeScript 1.4.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  window.IxMap = {};

  IxMap.Search = (function() {

    Search.featuresJson = 'javascripts/features.json';

    Search.searchJson = 'javascripts/search.json';

    Search.searchFieldId = '#search';

    Search.exchangeLatLons = [];

    Search.prototype.lookupFromSearchTerm = function(searchName) {
      var _this = this;
      this.searchName = searchName;
      return jQuery.getJSON(IxMap.Search.featuresJson, function(data) {
        var exchanges;
        _this.map.clearAllBuildings();
        _this.map.currentSearchValue = _this.searchName;
        exchanges = [];
        _this.map.bounds(jQuery.map(data, function(exchange, i) {
          if (exchange.search_name === _this.searchName) {
            exchanges.push(exchange.building_id);
            return {
              latitude: exchange.latitude,
              longitude: exchange.longitude
            };
          }
        }));
        _this.map.showSearchBuildings(exchanges);
        return jQuery(IxMap.Search.searchFieldId).val("Search").blur();
      });
    };

    function Search(map) {
      var _this = this;
      this.map = map;
      jQuery.getJSON(IxMap.Search.searchJson, function(data) {
        return jQuery(IxMap.Search.searchFieldId).autocomplete({
          position: {
            my: "right top",
            at: "right bottom"
          },
          source: data,
          select: function(event, ui) {
            return _this.lookupFromSearchTerm(ui.item.value);
          }
        });
      });
      jQuery(IxMap.Search.searchFieldId).val("Search").focus(function() {
        jQuery(this).addClass("focus");
        if (jQuery(this).val() === "Search") {
          return jQuery(this).val("");
        }
      }).blur(function() {
        return jQuery(this).removeClass("focus").val("Search");
      });
    }

    return Search;

  })();

  IxMap.Information = (function() {

    function Information() {}

    Information.informationMarkupId = "#information";

    Information.markerPath = 'images/markers.png';

    Information.clearInfo = function() {
      return jQuery(IxMap.Information.informationMarkupId).empty();
    };

    Information.exchangeListLink = function(map) {
      return jQuery(IxMap.Information.informationMarkupId).append(jQuery("<div/>").attr("class", "exchange-link").html(jQuery("<a/>").attr("href", "javascript:").html("Internet Exchange List")).click(map, function(event) {
        map.showAllExchanges();
        return map.showAllBuildings();
      }));
    };

    Information.exchangeName = function(map) {
      var building, exchange, exchangeInfo, _i, _j, _len, _len1, _ref, _ref1;
      exchangeInfo = null;
      _ref = map.buildings;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        building = _ref[_i];
        _ref1 = building.geojsonProperties.exchanges;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          exchange = _ref1[_j];
          if (exchange.address[0] === map.currentSearchValue) {
            exchangeInfo = exchange;
            break;
          }
        }
        if (exchangeInfo != null) {
          break;
        }
      }
      return jQuery(IxMap.Information.informationMarkupId).append(jQuery("<h2/>").attr("class", "search-result-name").html(map.currentSearchValue)).append(jQuery("<div/>").attr("class", "exchange").attr("id", "exchange-0}").append(jQuery("<div/>").addClass("exchange-icon")).append(IxMap.Information.exchangeContactInfo(exchangeInfo, "exchange-information")));
    };

    Information.appendExchangesAvailable = function() {
      return jQuery(IxMap.Information.informationMarkupId).append(jQuery("<h2/>").attr("class", "exchanges-available").html("IXes located in this building:"));
    };

    Information.appendSelectedBuilding = function() {
      return jQuery(IxMap.Information.informationMarkupId).append(jQuery("<h2/>").attr("class", "exchanges-available").html("Selected Building:"));
    };

    Information.appendBuildingInfo = function(obj) {
      var address, linkToBuilding;
      return jQuery(IxMap.Information.informationMarkupId).append(jQuery("<div/>").attr("class", "building").attr("id", "building-" + obj.building.geojsonProperties.building_id).append(obj.letter != null ? jQuery("<div/>").attr("class", "building-marker").attr("style", "background:url(" + this.markerPath + ") no-repeat -" + ((obj.letter + 1) * 22) + "px 0;") : jQuery("<div/>").addClass("building-icon")).append(jQuery("<div/>").attr("class", "building-info").append(jQuery("<div/>").attr("class", "building-address").append(linkToBuilding = jQuery("<a/>").attr("href", "javascript:void(0);").click(obj, function(event) {
        return obj.map.selectBuildingFromList(obj.map.currentSearchValue, obj.building, obj.letter != null ? 'red' : 'blue');
      }).mouseout(obj, function(event) {
        return obj.map.infoBox.close();
      }), (function() {
        var _i, _len, _ref, _results;
        _ref = obj.building.geojsonProperties.address;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          address = _ref[_i];
          _results.push(linkToBuilding.append(jQuery("<div>").text(address).html() + "<br/>"));
        }
        return _results;
      })()))).append(jQuery("<div/>").attr("style", "clear:both;")));
    };

    Information.appendExchangeInfo = function(exchangeInfo) {
      return jQuery(IxMap.Information.informationMarkupId).append(jQuery("<div/>").attr("class", "exchange-listing").attr("id", "exchange-" + exchangeInfo['index']).append(jQuery("<div/>").attr("class", "exchange-name").append(jQuery("<a/>").attr("href", "javascript:void(0);").html(exchangeInfo['name']).click(exchangeInfo, function(event) {
        return exchangeInfo['search'].lookupFromSearchTerm(exchangeInfo['name']);
      })).append(jQuery("<div/>").attr("style", "clear:both;"))));
    };

    Information.appendBuildingExchangeInfo = function(exchangeInfo) {
      return jQuery(IxMap.Information.informationMarkupId).append(jQuery("<div/>").attr("class", "exchange").attr("id", "exchange-" + exchangeInfo['index']).append(jQuery("<div/>").addClass("exchange-icon")).append(jQuery("<div/>").attr("class", "exchange-name").append(jQuery("<a/>").attr("href", "javascript:void(0);").click(exchangeInfo, function(event) {
        return exchangeInfo['search'].lookupFromSearchTerm(exchangeInfo['exchange']['address'][0]);
      }).html(("" + exchangeInfo['exchange']['address'][0]).replace(/\(.+?\)/, "")))).append(IxMap.Information.exchangeContactInfo(exchangeInfo['exchange'])));
    };

    Information.exchangeContactInfo = function(exchangeInfo, className) {
      var contact_email, contact_name, infoDiv;
      if (className == null) {
        className = "exchange-info";
      }
      contact_email = exchangeInfo['contact_one_email'] != null ? jQuery("<div/>").append(jQuery("<a/>").attr("href", "mailto:" + exchangeInfo['contact_one_email']).html(exchangeInfo['contact_one_email'])).html() : "";
      contact_name = exchangeInfo['contact_one'] != null ? jQuery("<div/>").html(exchangeInfo['contact_one']).html() : "";
      infoDiv = jQuery("<div/>").addClass(className);
      if ((exchangeInfo['contact_one'] != null) || (exchangeInfo['contact_one_email'] != null)) {
        infoDiv.append(jQuery("<div/>").attr("class", "exchange-contact").html("" + contact_name + "  " + contact_email));
      }
      if (exchangeInfo['telephone'] != null) {
        infoDiv.append(jQuery("<div/>").attr("class", "exchange-contact").html(exchangeInfo['telephone']));
      }
      if (exchangeInfo['email'] != null) {
        infoDiv.append(jQuery("<div/>").attr("class", "exchange-contact").append(jQuery("<a/>").attr("href", "mailto:" + exchangeInfo['email']).html(exchangeInfo['email'])));
      }
      if (exchangeInfo['url'] != null) {
        infoDiv.append(jQuery("<div/>").attr("class", "exchange-contact").append(jQuery("<a/>").attr("href", exchangeInfo['url']).attr("onclick", "window.open(this.href,'ix-new-window');return false;").html("Website")));
      }
      if (exchangeInfo['euro_affiliation'] != null) {
        infoDiv.append(jQuery("<div/>").attr("class", "exchange-contact").html("Member: " + exchangeInfo['euro_affiliation']));
      }
      if (exchangeInfo['date_online'] != null) {
        infoDiv.append(jQuery("<div/>").attr("class", "exchange-contact").html("Online since: " + exchangeInfo['date_online']));
      }
      return infoDiv;
    };

    return Information;

  })();

  IxMap.Map = (function() {

    Map.buildingsGeojson = 'javascripts/buildings.geojson';

    Map.exchangesListJson = 'javascripts/search.json';

    Map.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    Map.iconObj = {
      url: 'images/markers.png',
      size: new google.maps.Size(22, 29),
      origin: new google.maps.Point(0, 0)
    };

    Map.prototype.showAllExchanges = function() {
      var _this = this;
      IxMap.Information.clearInfo();
      return jQuery.getJSON(IxMap.Map.exchangesListJson, function(data) {
        var exchange, i, _i, _len, _ref, _results;
        _this.exchangeList = data;
        _ref = _this.exchangeList;
        _results = [];
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          exchange = _ref[i];
          _results.push(IxMap.Information.appendExchangeInfo({
            name: exchange,
            search: _this.search,
            index: i
          }));
        }
        return _results;
      });
    };

    Map.prototype.selectBuildingFromList = function(name, building, color) {
      var addr, infoMarkup, _i, _len, _ref;
      if (color == null) {
        color = 'blue';
      }
      this.infoBox.close();
      infoMarkup = jQuery('<div/>').addClass("" + color + "-info-box-content").append(jQuery('<div/>').addClass("" + color + "-info-box-pointer"));
      if ((name != null) && name !== "") {
        infoMarkup.append(jQuery("<strong/>").text(name)).append("<br/>");
      }
      this.gmap.panTo(building.position);
      _ref = building.geojsonProperties.address;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        addr = _ref[_i];
        infoMarkup.append(jQuery("<div/>").text(addr));
      }
      this.infoBox.setContent(jQuery('<div/>').append(infoMarkup).html());
      this.infoBox.setPosition(building.position);
      return this.infoBox.open(this.gmap);
    };

    Map.prototype.clearAllBuildings = function() {
      var building, _i, _len, _ref, _results;
      IxMap.Information.clearInfo();
      this.infoBox.close();
      _ref = this.buildings;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        building = _ref[_i];
        google.maps.event.clearListeners(building, 'click');
        building.setIcon(IxMap.Map.iconObj);
        _results.push(building.setMap(null));
      }
      return _results;
    };

    Map.prototype.onClickMapEvent = function() {
      var _this = this;
      return google.maps.event.addListener(this.gmap, 'click', function(event) {
        var building, _i, _len, _ref;
        _this.infoBox.close();
        _this.clearAllBuildings();
        _this.currentSearchValue = '';
        _ref = _this.buildings;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          building = _ref[_i];
          _this.setMarkerEventListener(building);
          building.setMap(_this.gmap);
        }
        return _this.showAllExchanges();
      });
    };

    Map.prototype.setMarkerEventListener = function(building) {
      var _this = this;
      return google.maps.event.addListener(building, 'click', function(event) {
        var exchange, i, _i, _len, _ref, _results;
        IxMap.Information.clearInfo();
        IxMap.Information.exchangeListLink(_this);
        IxMap.Information.appendSelectedBuilding();
        _this.selectBuildingFromList(building.geojsonProperties.name, building);
        IxMap.Information.appendBuildingInfo({
          map: _this,
          building: building
        });
        if (building.geojsonProperties.exchanges) {
          IxMap.Information.appendExchangesAvailable();
        }
        _ref = building.geojsonProperties.exchanges;
        _results = [];
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          exchange = _ref[i];
          _results.push(IxMap.Information.appendBuildingExchangeInfo({
            exchange: exchange,
            search: _this.search,
            index: i
          }));
        }
        return _results;
      });
    };

    Map.prototype.setSearchResultMarkerEventListener = function(building) {
      var _this = this;
      return google.maps.event.addListener(building, 'click', function(event) {
        _this.infoBox.close();
        return _this.selectBuildingFromList(_this.currentSearchValue, building, 'red');
      });
    };

    Map.prototype.showSearchBuildings = function(exchange) {
      var building, included, x, _i, _len, _ref, _ref1, _results;
      IxMap.Information.clearInfo();
      IxMap.Information.exchangeListLink(this);
      IxMap.Information.exchangeName(this);
      x = 0;
      _ref = this.buildings;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        building = _ref[_i];
        if (included = (_ref1 = building.geojsonProperties.building_id, __indexOf.call(exchange, _ref1) >= 0)) {
          building.setIcon({
            url: 'images/markers.png',
            size: new google.maps.Size(22, 29),
            origin: new google.maps.Point((x + 1) * 22, 0)
          });
          IxMap.Information.appendBuildingInfo({
            map: this,
            building: building,
            letter: x
          });
          this.setSearchResultMarkerEventListener(building);
          building.setMap(this.gmap);
          _results.push(x++);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Map.prototype.showAllBuildings = function() {
      var _this = this;
      if (this.buildings) {
        this.clearAllBuildings();
      }
      return jQuery.getJSON(IxMap.Map.buildingsGeojson, function(data) {
        var building, _i, _len, _ref, _results;
        _this.buildings = new GeoJSON(data);
        _ref = _this.buildings;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          building = _ref[_i];
          _this.setMarkerEventListener(building);
          building.setIcon(IxMap.Map.iconObj);
          _results.push(building.setMap(_this.gmap));
        }
        return _results;
      });
    };

    Map.prototype.bounds = function(exchangeLatLons) {
      var cableBounds, point, _i, _len;
      if (exchangeLatLons.length > 1) {
        cableBounds = new google.maps.LatLngBounds();
        for (_i = 0, _len = exchangeLatLons.length; _i < _len; _i++) {
          point = exchangeLatLons[_i];
          cableBounds.extend(new google.maps.LatLng(point.latitude, point.longitude));
        }
        return this.gmap.fitBounds(cableBounds);
      } else {
        this.gmap.setCenter(new google.maps.LatLng(exchangeLatLons[0].latitude, exchangeLatLons[0].longitude));
        return this.gmap.setZoom(10);
      }
    };

    function Map(element, center, zoom) {
      this.element = element;
      this.center = center;
      this.zoom = zoom;
      this.setMarkerEventListener = __bind(this.setMarkerEventListener, this);

      this.onClickMapEvent = __bind(this.onClickMapEvent, this);

      this.clearAllBuildings = __bind(this.clearAllBuildings, this);

      this.showAllExchanges = __bind(this.showAllExchanges, this);

      this.gmap = new google.maps.Map(document.getElementById(this.element), {
        zoom: this.zoom,
        maxZoom: 20,
        minZoom: 2,
        styles: [
          {
            featureType: "all",
            elementType: "all",
            stylers: [
              {
                "gamma": 1.7
              }
            ]
          }
        ],
        center: this.center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      this.currentSearchValue = '';
      this.infoBox = new InfoBox({
        closeBoxURL: "",
        alignBottom: true,
        pixelOffset: new google.maps.Size(-60, -45)
      });
      this.showAllBuildings();
      this.onClickMapEvent();
      this.showAllExchanges();
      this.search = new IxMap.Search(this);
      return this;
    }

    return Map;

  })();

  jQuery(document).ready(function() {
    var map;
    return map = new IxMap.Map('map', new google.maps.LatLng(30.0, -30.0), 3);
  });

}).call(this);