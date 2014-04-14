[www.internetexchangemap.com](http://www.internetexchangemap.com)
===========================

[![Internet Exchange Map](http://25.media.tumblr.com/tumblr_mebndiuZYI1qcsswzo1_500.png)](http://www.internetexchangemap.com)

The [Internet Exchange Map](http://www.internetexchangemap.com) is a free resource from [TeleGeography](http://www.telegeography.com). Data contained in this map was complied by TeleGeography and is updated on a regular basis.


Installation
------------

    $ git clone git://github.com/telegeography/www.internetexchangemap.com.git

Point your webserver's document root to the public/public directory and that's it.


Updates
-------

To make sure you get any updates, just watch this repository and perform a pull when you see any new commits:

    $ cd www.internetexchangemap.com
    $ git pull

How did you make the Internet Exchange Map?
-------------------------------

We use [Google's Maps API v3.](http://code.google.com/apis/maps/documentation/javascript/) to create the map and Jason Sanford's [GeoJSON-to-Google-Maps](https://github.com/JasonSanford/GeoJSON-to-Google-Maps) library to transform [GeoJSON](http://www.geojson.org/geojson-spec.html) into map markers and textual properties.

This interactive map Javascript was created using the [Node.js](http://nodejs.org/) utility [CoffeeScript](http://coffeescript.org/) written by Jeremy Ashkenas, the [Ember](http://emberjs.com/) web application framework, the [HTML5 Boilerplate](http://html5boilerplate.com/) front-end template, the [node-build-script](https://github.com/h5bp/node-build-script) and [node-ember-precompile](https://github.com/gabrielgrant/node-ember-precompile) tools.  The CoffeScript for the map was written in-house at TeleGeography.

Notable Commandline examples:

	# Install ember-precomile from github to get versions correct.
	npm install -g --from-git git://github.com/gabrielgrant/node-ember-precompile.git
	
	# Used watchr to compile coffeescript/handlebars.
	watchr bin/script.watchr
	
	# Watch, server and build using h5bp, very helpful
	cd public && h5bp watch
	cd public && h5bp server
	cd public && h5bp build:basics


How can I download the dataset?
--------------------------------------------------

All the data is stored in GeoJSON here: [public/javascripts/buildings.geojson](https://raw.githubusercontent.com/telegeography/www.internetexchangemap.com/master/production/api/v1/buildings.geojson)



Questions? Corrections?
------------------------

[ixmap@telegeography.com](mailto:ixmap@telegeography.com)
