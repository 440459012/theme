require [
  'jquery'
  'bootstrap'
  'parallaxjs'
  'owl.carousel'
  'isotope-layout'
  'waypoints'
  'counterup'
], ($,bs,parallax,owlCarousel,Isotope) ->

  class mainScripts

    constructor: ->
      @nodes = 
        langSwitchBtn       : $ '.js-lang-switcher-btn'
        simpleTooltip       : $ '.simple-tooltip'
        parallaxSection      : $ '.js-parallax'
        headSlider      : $ '.js-head-slider'
        headSliderNav      : $ '.js-head-slider-navigation'
        testimonialSlider      : $ '.js-testimonial-slider'
        testimonialSliderNav      : $ '.js-testimonial-slider-navigation'
        projectsGrid      :  '.grid'
        projectFilters      : $ '#filters'

      @init()
      @events()




    init:->
      @initParallax()
      @initHeadSlider()
      @initTestimonialSlider()
      @initProjectsGrid()
      $('.counter').counterUp()


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

    initTestimonialSlider:->
      @nodes.testimonialSlider.owlCarousel
        items:1
        loop:true
        dots:false
        nav:true
        # animateOut: 'zoomOut'
        navSpeed:1000
        animateIn: 'fadeIn'
        navContainer:@nodes.testimonialSliderNav
        navText:['','']

    initProjectsGrid: ->
      _this = @
      @nodes.projectFilters.on 'click' , 'button', () ->
        _this.nodes.projectFilters.find('button').removeClass 'active'
        $(this).addClass 'active'
        filterValue = $(this).attr('data-filter');
        iso.arrange
          filter: filterValue



      iso = new Isotope @nodes.projectsGrid,
        itemSelector: '.grid-item',
        getSortData: {
          name: '.name',
          category: '[data-category]'
        },
        masonry:
          columnWidth: 100
          gutter: 30


    initParallax:->
      @nodes.parallaxSection.parallax()



  new mainScripts
