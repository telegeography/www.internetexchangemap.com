Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"nav\">\n	<div id=\"logo\"><a href=\"http://www.telegeography.com/\"><img src=\"images/telegeography-logo.png\" width=\"230\" height=\"25\" alt=\"Telegeography\"></a></div>\n	<div id=\"description\">\n		<h1>Internet Exchange Map</h1>\n		<div>\n			The Internet Exchange Map is a free resource from <a href=\"http://www.telegeography.com/\">TeleGeography</a>. Data contained in this map was complied by TeleGeography and is updated on a regular basis.\n		</div>\n		<div class=\"learn-more\">\n			To learn more about <a href=\"http://www.telegeography.com/\">TeleGeography</a> or this map, please visit <a href=\"http://www.telegeography.com/telecom-resources/internet-exchange-map/index.html\">www.telegeography.com</a>.\n		</div>\n	</div>\n	<div id=\"social\">\n		<a href=\"https://github.com/telegeography/www.internetexchangemap.com\" class=\"github\"></a>\n		<a href=\"http://www.facebook.com/sharer.php?u=http://www.internetexchangemap.com/\" class=\"facebook\"></a>\n		<a href=\"https://twitter.com/share?original_referer=http%3A%2F%2Fwww.internetexchangemap.com%2F&amp;source=tweetbutton&amp;text=Internet+Exchange+Map&amp;url=http%3A%2F%2Fwww.internetexchangemap.com\" class=\"twitter\"></a>\n		<a href=\"mailto:ixmap@telegeography.com\">Feedback</a>\n		<span class=\"copyright\">All content &#169; <span class=\"year\">2013</span> PriMetrica, Inc.</span>\n	</div>\n	<div class=\"search-container\"><input id=\"search\" value=\"Search\" /></div>\n	<div id=\"information\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n</div>\n<div id=\"map\"></div>");
  return buffer;
  
});
Ember.TEMPLATES["building-address-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "addr", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("<br/>\n");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers.each.call(depth0, "addr", "in", "address", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});
Ember.TEMPLATES["building-address"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "address", "in", "building.address", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "address", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("<br/>\n");
  return buffer;
  }

  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "building", "building.id", options) : helperMissing.call(depth0, "linkTo", "building", "building.id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  else { data.buffer.push(''); }
  
});
Ember.TEMPLATES["building"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Internet Exchange List");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n<div class=\"exchange\">\n	<div class=\"exchange-icon\"></div>\n	<div class=\"exchange-name\">\n		");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "internet-exchange", "exchange.slug", options) : helperMissing.call(depth0, "linkTo", "internet-exchange", "exchange.slug", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</div>\n	<div class=\"exchange-info\">\n		");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "exchange.info", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</div>\n</div>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "exchange.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n		<div class=\"exchange-contact\">\n		");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "link", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n		");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n			<a ");
  hashTypes = {'onclick': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'onclick': ("onclick")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("link")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</a><br/>\n		");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n			");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("<br/>\n		");
  return buffer;
  }

  data.buffer.push("<div class=\"exchange-link\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n<h2 class=\"exchanges-available\">Selected Building:</h2>\n<div class=\"building\">\n	<div class=\"building-icon\"></div>\n	<div class=\"building-info\">\n		<div class=\"building-address\">\n			");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.buildingView", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n		</div>\n	</div>\n	<div style=\"clear:both;\"></div>\n</div>\n<h2 class=\"exchanges-available\">IXes located in this building:</h2>\n");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "exchange", "in", "exchanges", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  return buffer;
  
});
Ember.TEMPLATES["exchange-list-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div class=\"exchange-listing\">\n	<div class=\"exchange-name\">\n		");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "internet-exchange", "item.slug", options) : helperMissing.call(depth0, "linkTo", "internet-exchange", "item.slug", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		<div style=\"clear:both;\"></div>\n	</div>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n	");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.listItemView", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});
Ember.TEMPLATES["internet-exchange"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Internet Exchange List");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n			<div class=\"exchange-contact\">\n			");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "link", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n				<a ");
  hashTypes = {'onclick': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'onclick': ("onclick")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("link")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</a><br/>\n			");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n				");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("<br/>\n			");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n<div class=\"building\">\n	<div class=\"building-marker\" ");
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("building.offset")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n	<div class=\"building-info\">\n		<div class=\"building-address\">\n			");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.listItemView", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n		</div>\n	</div>\n	<div style=\"clear:both;\"></div>\n</div>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"exchange-link\">\n	");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n<h2 class=\"search-result-name\">\n	");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</h2>\n<div class=\"exchange\" id=\"exchange-0\">\n	<div class=\"exchange-icon\"></div>\n	<div class=\"exchange-information\">\n	  ");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "exchange_info", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</div>\n</div>\n");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "building", "in", "buildings", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  return buffer;
  
});
