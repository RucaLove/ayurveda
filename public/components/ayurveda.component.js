(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('ayurveda', {
      templateUrl: '/templates/ayurveda.template.html', // AYURVEDA TEMPLATE
      controller: AyurvedaController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  AyurvedaController.$inject = ['$state', 'AyurvedaService', '$stateParams']

  function AyurvedaController($state, AyurvedaService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $('.tiva-timetable').hide()
      $('.logo-text-only').hide()
      $('.brand-logo').show()
      $('.modal').modal()
      $('.collapsible').collapsible()
    }

  } // END Ayurveda Controller
}());
