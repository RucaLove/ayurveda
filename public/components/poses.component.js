(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('poses', {
      templateUrl: '/templates/poses.template.html', // POSES TEMPLATE
      controller: PosesController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  PosesController.$inject = ['$state', 'PosesService', '$stateParams']

  function PosesController($state, PosesService, $stateParams) {
    const vm = this
    vm.$onInit = onInit
    // vm.goposes = goposes

    function onInit() {
      PosesService.allItems()
        .then((allitems) => {
          // console.log("all items should be here: ", allitems)
          vm.items = allitems
          $('.tiva-timetable').hide()
          $('.logo-text-only').hide()
          $('.brand-logo').show()
        })

    }

  } // END Poses Controller
}());
