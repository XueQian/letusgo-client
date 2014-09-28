'use strict';

angular.module('letusgoApp')
  .controller('manageCategoryCtrl', function ($scope, $location, categoryService, itemService) {

    $scope.$emit('parent_manageActive');

    categoryService.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.getItem = function (id) {
      return itemService.getItem(id);
    };

    $scope.deleteCategory = function (index) {

      categoryService.deleteCategory(index);

      categoryService.getCategories(function (data) {
        $scope.categories = data;
      });
    };

    $scope.addCategory = function () {

      categoryService.addCategory($scope.category, function (data) {
        $scope.categories = data;
        $location.path('/manageCategory');
      });
    };

  });
