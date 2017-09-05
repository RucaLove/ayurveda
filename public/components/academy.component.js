(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('academy', {
      templateUrl: '/templates/academy.template.html', // POSES TEMPLATE
      controller: AcademyController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  AcademyController.$inject = ['$state', 'AcademyService', '$stateParams']

  function AcademyController($state, AcademyService, $stateParams) {
    const vm = this
    vm.$onInit = onInit
    vm.login = login

    function onInit() {
      $('.tiva-timetable').hide()
      $('.logo-text-only').hide()
      $('.brand-logo').show()
    }

    function login(event) {
      // ng-click / ng-sumit will send the data through $scope.login()
      AcademyService.login(all.data)
      .then((data) => {
        vm.items = data
      })

      // AcademyService.allItems()
      //   .then((allitems) => {
      //     vm.items = allitems
      //   })

    }

  } // END Academy Controller
}());
