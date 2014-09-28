'use strict';

angular.module('letusgoApp')
  .controller('manageGoodsItemsCtrl', function ($location, $scope, CategoryService, ItemService) {

    $scope.$emit('parent_manageActive');

    ItemService.getGoodsItems(function (data) {
      $scope.products = data;
    });

    $scope.deleteItem = function (index) {

      ItemService.deleteGoodsItems(index);

      ItemService.getGoodsItems(function (data) {
        $scope.products = data;
      });
    };

    CategoryService.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.addGoodsItems = function () {

      ItemService.addItem($scope.item, function (data) {
        $scope.products = data;
        $location.path('/manageGoodsItems');
      });
    };

  });
