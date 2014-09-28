'use strict';

angular.module('letusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, CategoryService, ItemService, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    ItemService.getItem($routeParams.id, function (data) {
      $scope.item = data;
    });

    CategoryService.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.modifyItem = function (index) {
      ItemService.modifyItem(index, $scope.item, function () {
      });
    };

  });

