'use strict';

angular.module('letusgoApp')
  .controller('manageGoodsItemsCtrl', function ($location, $scope, categoryService, itemService) {

    $scope.$emit('parent_manageActive');

    itemService.getGoodsItems(function (data) {
      $scope.products = data;
    });

    $scope.deleteItem = function (index) {

      itemService.deleteGoodsItems(index);

      itemService.getGoodsItems(function (data) {
        $scope.products = data;
      });
    };

    categoryService.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.addGoodsItems = function () {

      itemService.addItem($scope.item, function (data) {
        $scope.products = data;
        $location.path('/manageGoodsItems');
      });
    };

  });
