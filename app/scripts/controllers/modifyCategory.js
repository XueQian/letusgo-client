'use strict';

angular.module('letusgoApp')
  .controller('modifyCategoryCtrl', function ($scope, categoryService, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    categoryService.getcategoryById($routeParams.id, function (data) {
      $scope.category = data;
    });

    $scope.modifyCategory = function (index) {
      categoryService.modifyCategory(index, $scope.category, function (data) {
        $scope.categories = data;
      });
    };

  });



