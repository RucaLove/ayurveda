(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('love', {
      templateUrl: '/templates/love.template.html', // LOVE TEMPLATE
      controller: LoveController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  LoveController.$inject = ['$state', 'LoveService', '$stateParams']

  function LoveController($state, LoveService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $('.tiva-timetable').hide()
      $('.logo-text-only').hide()
      $('.brand-logo').show()
    }

  } // END Love Controller
}());
