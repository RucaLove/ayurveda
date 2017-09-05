
(function() {
  'use strict'

  angular.module('hibiskiss')
  .service('StoreService', service)
  service.$inject = ['$http']

  function service($http, StoreService) {
    this.allItems = function() { // Grabs all items
      return $http.get('/api/store').then(all => {
          // console.log("HAYYYY", all.data)
          return all.data
        }, err => {
          // console.log("NOOOO");
        })
    }
    // this.item = function(id) { // Grab an item by ID
    //   return $http.get(`/api/store/${id}`).then(one => {
    //     one.data
    //     console.log("HELLO", one.data);
    //   })
    // }

  }
})()
