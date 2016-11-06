require [
  'jquery'
  'bootstrap'
  'parallaxjs'
  'owl.carousel'
], ($,bs,parallax,owlCarousel) ->

  class mainScripts

    constructor: ->
      @nodes = 
        langSwitchBtn       : $ '.js-lang-switcher-btn'
        simpleTooltip       : $ '.simple-tooltip'
        parallaxSection      : $ '.js-parallax'
        headSlider      : $ '.js-head-slider'
        headSliderNav      : $ '.js-head-slider-navigation'

      @init()
      @events()




    init:->
      @initParallax()
      @initHeadSlider()


    events:->

    initHeadSlider:->
      @nodes.headSlider.owlCarousel
        items:1
        loop:false
        dots:false
        nav:true
        # animateOut: 'zoomOut'
        navSpeed:1000
        animateIn: 'fadeIn'
        navContainer:@nodes.headSliderNav
        navText:['','']
    initParallax:->
      @nodes.parallaxSection.parallax()



  new mainScripts
