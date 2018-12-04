[www.internetexchangemap.com](http://www.internetexchangemap.com)
===========================

[![Internet Exchange Map](http://cdn.telegeography.com/github/www.internetexchangemap.com.png)](http://www.internetexchangemap.com)

The [Internet Exchange Map](http://www.internetexchangemap.com) is a free resource from [TeleGeography](http://www.telegeography.com). Data contained in this map was complied by TeleGeography and is updated on a regular basis.


Installation
------------

    $ git clone git://github.com/telegeography/www.internetexchangemap.com.git
    $ cd www.internetexchangemap.com
    $ yarn install
    $ ember serve

Point your browser to the http://localhost:3004 and that's it.


Updates
-------

To make sure you get any updates, just watch this repository and perform a pull when you see any new commits:

    $ cd www.internetexchangemap.com
    $ git pull

How did you make the Internet Exchange Map?
-------------------------------

We use [Google's Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) to create the map and Jason Sanford's [GeoJSON-to-Google-Maps](https://github.com/JasonSanford/GeoJSON-to-Google-Maps) library to transform [GeoJSON](http://www.geojson.org/geojson-spec.html) into map markers and textual properties.

This interactive map Javascript was created using the [Ember](https://emberjs.com/) web application framework using [embercli](https://ember-cli.com/).  The Javascript for the map was written in-house at TeleGeography.

How can I download the dataset?
--------------------------------------------------

All the data is stored in GeoJSON here: [public/javascripts/buildings.geojson](https://raw.githubusercontent.com/telegeography/www.internetexchangemap.com/master/public/api/v2/buildings.geojson)



Questions? Corrections?
------------------------

[ixmap@telegeography.com](mailto:ixmap@telegeography.com)
