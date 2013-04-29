module.exports = function(grunt) {
	grunt.initConfig({
    staging: 'staging',
    output: 'public',
		server: {
			staging: { port: 3003, base: 'staging' },
			output: { port: 3004, base: 'public' }
		},
    mkdirs: {
      staging: './'
    },
    css: {
      'stylesheets/ix.css': ['stylesheets/normalize.min.css', 'stylesheets/ix-map.css']
    },
    rev: {
      js: 'javascripts/**/*.js',
      css: 'stylesheets/**/*.css'
    },
    usemin: {
      html: ['**/*.html'],
      css: ['**/*.css']
    },
    html: {
      files: '<config:usemin.html>'
    },
    img: {
      dist: 'images/**'
    },
    watch: {
      files: ['grunt.js', 'javascripts/**/*.js', '**/*.html', 'stylesheets/**/*.css'],
      tasks: ['clean', 'build:default']
    },
    meta: {
      version: '0.1.0',
      banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'javascripts/**/*.js', '**/*.html', 'stylesheets/**/*.css']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: ['javascripts/handlebars.template.js','javascripts/ix_map.js','javascripts/app.js'],
        dest: 'javascripts/main.js'
      }
    },
    min: {
      dist: {
        src: ['javascripts/handlebars.template.js','javascripts/ix_map.js','javascripts/app.js'],
        dest: 'javascripts/main.min.js'
      },
      lib1: {
        src: 'javascripts/libs/ember-1.0.0-rc.3.js',
        dest: 'javascripts/libs/ember-1.0.0-rc.3.min.js'
      },
      lib2: {
        src: 'javascripts/libs/GeoJSON.js',
        dest: 'javascripts/libs/GeoJSON.min.js'
      },
      lib3: {
        src: 'javascripts/libs/handlebars.runtime.js',
        dest: 'javascripts/libs/handlebars.runtime.min.js'
      },
      lib4: {
        src: 'javascripts/libs/infobox.js',
        dest: 'javascripts/libs/infobox.min.js'
      },
      lib5: {
        src: 'javascripts/libs/jquery-1.9.1.js',
        dest: 'javascripts/libs/jquery-1.9.1.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });
};
