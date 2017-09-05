(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('signup', {
      templateUrl: '/templates/login.template.html', // POSES TEMPLATE
      controller: SignupController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  SignupController.$inject = ['$state', 'UsersService', '$stateParams']

  function SignupController($state, UsersService, $stateParams) {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      UsersService.allItems()
        .then((allitems) => {
          console.log("all items should be here: ", allitems)
          vm.items = allitems
          $('.tiva-timetable').hide()
          $('.logo-text-only').hide()
          $('.brand-logo').show()
        })
      }

        // vm.submitLogin = function(event) {
        //   event.preventDefault();
        //   console.log("event", event);
        //   UsersService.allItems()
        //     .then((allitems) => {
        //       console.log("all items should be here: ", allitems)
        //       vm.items = allitems
        //     })
        // }

  } // END Signup Controller
}());
