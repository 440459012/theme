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
        loop:true
        dots:false
        animateIn: 'zoomInRight'
        animateOut: 'zoomOutLeft'
        navContainer:@nodes.headSliderNav
    initParallax:->
      @nodes.parallaxSection.parallax()



  new mainScripts
