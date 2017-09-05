(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('splash', {
      templateUrl: '/templates/splash.template.html', //PARENT TEMPLETE
      controller: SplashController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  SplashController.$inject = ['SplashService', '$stateParams', '$state']

  function SplashController(SplashService, $stateParams, $state) {
    const vm = this
    vm.$onInit = onInit
    vm.home = home
    vm.splash = splash

    function onInit() {
      $('.tiva-timetable').hide()
      $('.brand-logo').hide()
      $('.logo-text-only').show()
    }

    function home() {
      $state.go('splash')
    }

    function splash() {
      //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
      // $state.go('splash')
    }


  } // END HomeController
}());
