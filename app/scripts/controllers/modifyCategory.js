'use strict';

angular.module('letusgoApp')
  .controller('modifyCategoryCtrl', function ($scope, CategoryService, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    CategoryService.getcategoryById($routeParams.id, function (data) {
      $scope.category = data;
    });

    $scope.modifyCategory = function (index) {
      CategoryService.modifyCategory(index, $scope.category, function (data) {
        $scope.categories = data;
      });
    };

  });



