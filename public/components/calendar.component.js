(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('calendar', {
      templateUrl: '/templates/calendar.template.html', // CALENDAR TEMPLATE
      controller: CalendarController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  CalendarController.$inject = ['$state', 'CalendarService', '$stateParams']

  function CalendarController($state, CalendarService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $('.tiva-timetable').hide()
      $('.logo-text-only').hide()
      $('.brand-logo').show()
    }

  } // END Calendar Controller

}());
