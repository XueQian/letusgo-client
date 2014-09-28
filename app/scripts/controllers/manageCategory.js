'use strict';

angular.module('letusgoApp')
  .controller('manageCategoryCtrl', function ($scope, $location, CategoryService, ItemService) {

    $scope.$emit('parent_manageActive');

    CategoryService.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.getItem = function (id) {
      return ItemService.getItem(id);
    };

    $scope.deleteCategory = function (index) {

      CategoryService.deleteCategory(index);

      CategoryService.getCategories(function (data) {
        $scope.categories = data;
      });
    };

    $scope.addCategory = function () {

      CategoryService.addCategory($scope.category, function (data) {
        $scope.categories = data;
        $location.path('/manageCategory');
      });
    };

  });
