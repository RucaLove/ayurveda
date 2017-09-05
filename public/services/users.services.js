(function() {
  'use strict'

  angular.module('hibiskiss')
    .service('UsersService', service)
  service.$inject = ['$http']

  function service($http) {

    this.allUsers = function() { // Grabs all users
      return $http.get('/api/users').then(all => all.data)
    }

    this.$User = function(id) { // Grab a user by ID
      return $http.get(`/api/users/${id}`).then(one => one.data)
    }

    this.createUser = function(createUser) { // Makes new user
      $http.user('/api/users', createUser)
      $state.reload();
    }

    // this.$del = function(id) { // Removes User by ID
    //   $http.delete(`/api/users/${id}`).then(d => $state.go('app.all'))
    // }

    // this.edit = function(user) { // Patches current User by ID
    //   $http.patch(`/api/users/${id}/`, user)
    //   $state.go('app.all')
    // }

  }
})();
