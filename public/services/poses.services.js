
(function() {
  'use strict'

  angular.module('hibiskiss')
  .service('PosesService', service)
  service.$inject = ['$http']

  function service($http, PosesService) {
    this.allItems = function() { // Grabs all items
      return $http.get('/api/poses').then(all => {
          console.log("HAYYYY", all.data)
          return all.data
        }, err => {
          // console.log("NOOOO");
        })
    }

    // this.$pose = function(id) { // Grab a pose by ID
    //   return $http.get(`/api/poses/${id}`).then(one => one.data)
    // }
    //
    // this.createpose = function(createpose) { // Makes new pose
    //   $http.pose('/api/poses', createpose)
    //   $state.reload();
    // }
    //
    // this.edit = function(pose) { // Patches current pose by ID
    //   $http.patch(`/api/poses/${id}/`, pose)
    //   $state.go('app.all')
    // }
    //
    // this.$del = function(id) { // Removes pose by ID
    //   $http.delete(`/api/poses/${id}`).then(d => $state.go('app.all'))
    // }

  }
})()
