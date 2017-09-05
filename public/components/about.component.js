(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('about', {
      templateUrl: '/templates/about.template.html', // ABOUT TEMPLATE
      controller: AboutController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  AboutController.$inject = ['$state', 'AboutService', '$stateParams']

  function AboutController($state, AboutService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $('.tiva-timetable').hide()
      $('.logo-text-only').hide()
      $('.brand-logo').show()
    }

  } // END About Controller
}());
