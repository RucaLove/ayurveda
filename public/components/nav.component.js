(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('navigation', {
      templateUrl: '/templates/nav.template.html', // NAV BAR TEMPLATE
      controller: NavigationController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  NavigationController.$inject = ['$state', '$stateParams', 'NavigationService']

  function NavigationController($state, $stateParams, NavigationService) {
    const vm = this
    vm.$onInit = onInit
    // vm.gonav = gonav

    function onInit() {
      // vm.navShow = false
      $('.tiva-timetable').hide()

      // $('.pushpin-nav-wrapper').each(function() {
      //   var $this = $(this);
      //   var $target = $('#' + $(this).attr('data-target'));
      //   $this.pushpin({
      //     top: $target.offset().top,
      //     bottom: $target.offset().top + $target.outerHeight() - $this.height()
      //   });
      // });

      $('.brand-logo').pushpin({
        top: 0,
        bottom: 1000,
        offset: 0
      });
    }

    // function gonav() {
    //   //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
    //   // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
    //   $state.go('nav')
    // }

  } // END NavigationigationController
}());
