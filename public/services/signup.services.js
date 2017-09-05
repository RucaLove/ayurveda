
(function() {
  'use strict'

  angular.module('hibiskiss')
  .service('SignupService', service)
  service.$inject = ['$http']

  function service($http, SignupService) {
    this.allItems = function() { // Grabs all items
      return $http.get('/api/users').then(all => {
          console.log("HAYYYY", all.data)
          return all.data
        }, err => {
          // console.log("NOOOO");
        })
  }
}
})()
