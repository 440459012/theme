require [
  'jquery'
  'bootstrap'
  'parallaxjs'
], ($,bs,parallax) ->

  class mainScripts

    constructor: ->
      @nodes =
        langSwitchBtn       : $ '.js-lang-switcher-btn'
        simpleTooltip       : $ '.simple-tooltip'
        parallaxSection      : $ '.js-parallax'

      @init()
      @events()




    init:->
      @initParallax()


    events:->

    initParallax:->
      @nodes.parallaxSection.parallax()



  new mainScripts
