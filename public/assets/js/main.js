/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/assets/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(30), __webpack_require__(31)]; (function($, bs, parallax, owlCarousel, Isotope) {
	  var mainScripts;
	  mainScripts = (function() {
	    function mainScripts() {
	      this.nodes = {
	        langSwitchBtn: $('.js-lang-switcher-btn'),
	        simpleTooltip: $('.simple-tooltip'),
	        parallaxSection: $('.js-parallax'),
	        headSlider: $('.js-head-slider'),
	        headSliderNav: $('.js-head-slider-navigation'),
	        testimonialSlider: $('.js-testimonial-slider'),
	        testimonialSliderNav: $('.js-testimonial-slider-navigation'),
	        projectsGrid: '.grid',
	        projectFilters: $('#filters')
	      };
	      this.init();
	      this.events();
	    }

	    mainScripts.prototype.init = function() {
	      this.initParallax();
	      this.initHeadSlider();
	      this.initTestimonialSlider();
	      this.initProjectsGrid();
	      return $('.counter').counterUp();
	    };

	    mainScripts.prototype.events = function() {};

	    mainScripts.prototype.initHeadSlider = function() {
	      return this.nodes.headSlider.owlCarousel({
	        items: 1,
	        loop: false,
	        dots: false,
	        nav: true,
	        navSpeed: 1000,
	        animateIn: 'fadeIn',
	        navContainer: this.nodes.headSliderNav,
	        navText: ['', '']
	      });
	    };

	    mainScripts.prototype.initTestimonialSlider = function() {
	      return this.nodes.testimonialSlider.owlCarousel({
	        items: 1,
	        loop: true,
	        dots: false,
	        nav: true,
	        navSpeed: 1000,
	        animateIn: 'fadeIn',
	        navContainer: this.nodes.testimonialSliderNav,
	        navText: ['', '']
	      });
	    };

	    mainScripts.prototype.initProjectsGrid = function() {
	      var _this, iso;
	      _this = this;
	      this.nodes.projectFilters.on('click', 'button', function() {
	        var filterValue;
	        _this.nodes.projectFilters.find('button').removeClass('active');
	        $(this).addClass('active');
	        filterValue = $(this).attr('data-filter');
	        return iso.arrange({
	          filter: filterValue
	        });
	      });
	      return iso = new Isotope(this.nodes.projectsGrid, {
	        itemSelector: '.grid-item',
	        getSortData: {
	          name: '.name',
	          category: '[data-category]'
	        },
	        masonry: {
	          columnWidth: 100,
	          gutter: 30
	        }
	      });
	    };

	    mainScripts.prototype.initParallax = function() {
	      return this.nodes.parallaxSection.parallax();
	    };

	    return mainScripts;

	  })();
	  return new mainScripts;
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});


/***/ }
/******/ ]);