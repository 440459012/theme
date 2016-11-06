<<<<<<< HEAD
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

	__webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2), __webpack_require__(15), __webpack_require__(16)]; (function($, bs, parallax, owlCarousel) {
	  var mainScripts;
	  mainScripts = (function() {
	    function mainScripts() {
	      this.nodes = {
	        langSwitchBtn: $('.js-lang-switcher-btn'),
	        simpleTooltip: $('.simple-tooltip'),
	        parallaxSection: $('.js-parallax'),
	        headSlider: $('.js-head-slider'),
	        headSliderNav: $('.js-head-slider-navigation')
	      };
	      this.init();
	      this.events();
	    }

	    mainScripts.prototype.init = function() {
	      this.initParallax();
	      return this.initHeadSlider();
	    };

	    mainScripts.prototype.events = function() {};

	    mainScripts.prototype.initHeadSlider = function() {
	      return this.nodes.headSlider.owlCarousel({
	        items: 1,
	        loop: true,
	        dots: false,
	        animateIn: 'fadeIn',
	        animateOut: 'fadeOut',
	        navContainer: this.nodes.headSliderNav
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
=======
!function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n=window.webpackJsonp;window.webpackJsonp=function(a,r){for(var o,l,s=0,p=[];s<a.length;s++)l=a[s],i[l]&&p.push.apply(p,i[l]),i[l]=0;for(o in r)e[o]=r[o];for(n&&n(a,r);p.length;)p.shift().call(null,t)};var a={},i={0:0};return t.e=function(e,n){if(0===i[e])return n.call(null,t);if(void 0!==i[e])i[e].push(n);else{i[e]=[n];var a=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.async=!0,r.src=t.p+"chunk-"+({}[e]||e)+"-"+{1:"0c6c307b2f836ee63114"}[e]+".js",a.appendChild(r)}},t.m=e,t.c=a,t.p="public/assets/js/",t(0)}([function(e,t,n){n.e(1,function(e){var t=[e(1),e(2),e(15),e(16)];(function(e,t,n,a){var i;return new(i=function(){function t(){this.nodes={langSwitchBtn:e(".js-lang-switcher-btn"),simpleTooltip:e(".simple-tooltip"),parallaxSection:e(".js-parallax"),headSlider:e(".js-head-slider"),headSliderNav:e(".js-head-slider-navigation")},this.init(),this.events()}return t.prototype.init=function(){return this.initParallax(),this.initHeadSlider()},t.prototype.events=function(){},t.prototype.initHeadSlider=function(){return this.nodes.headSlider.owlCarousel({items:1,loop:!1,dots:!1,nav:!0,navSpeed:1e3,animateIn:"fadeIn",navContainer:this.nodes.headSliderNav,navText:["",""]})},t.prototype.initParallax=function(){return this.nodes.parallaxSection.parallax()},t}())}).apply(null,t)})}]);
>>>>>>> 6f058a4f0bf13eaadafe190fa91bd7cd0901c870
