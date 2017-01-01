(function() {
  'use strict';
  const FooLib = abs1701.FooLib
  angular.module('BlankApp', ['ngMaterial'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope) {
      var key = FooLib.randomKey()
    $scope.currentNavItem = 'page1 ' + key.keyhex;
  }
})();
