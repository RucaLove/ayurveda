
(function() {
  'use strict'

  angular.module('hibiskiss')
  .service('AcademyService', service)
  service.$inject = ['$http']

  function service($http, AcademyService) {
    // $http.post('/api/users', data).then(all => {
    //   console.log("FORM DATA", data);
    //   return data
    // }), err => {
    //   console.log("ERROR");
    // }

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
