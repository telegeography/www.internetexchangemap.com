[www.internetexchangemap.com](http://www.internetexchangemap.com)
===========================

The [Internet Exchange Map](http://www.internetexchangemap.com) is a free resource from [TeleGeography](http://www.telegeography.com). Data contained in this map was complied by TeleGeography and is updated on a regular basis.


Installation
------------

    $ git clone git://github.com/telegeography/www.internetexchangemap.com.git

Point your webserver's document root to the public directory and that's it.


Updates
-------

To make sure you get any updates, just watch this repository and perform a pull when you see any new commits:

    $ cd www.internetexchangemap.com
    $ git pull

How did you make the Internet Exchange Cable Map?
-------------------------------

We use [Google's Maps API v3.](http://code.google.com/apis/maps/documentation/javascript/) to create the map and Jason Sanford's [GeoJSON-to-Google-Maps](https://github.com/JasonSanford/GeoJSON-to-Google-Maps) library to transform [GeoJSON](http://www.geojson.org/geojson-spec.html) into map markers and textual properties.

This interactive map Javascript was created using the [Node.js](http://nodejs.org/) utility [CoffeeScript](http://coffeescript.org/) written by Jeremy Ashkenas and minified using Mihai Bazon's [UglifyJS2](https://github.com/mishoo/UglifyJS2).  The CoffeScript for the map was written in-house at TeleGeography.


How can I download the dataset?
--------------------------------------------------

All the data is stored in GeoJSON here: [public/javascripts/buildings.geojson](https://raw.github.com/telegeography/www.internetexchangemap.com/master/public/javascripts/buildings.geojson)



Questions? Corrections?
------------------------

[ixmap@telegeography.com](mailto:ixmap@telegeography.com)
