'use strict';

angular.module('letusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, categoryService, itemService, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    itemService.getItemById($routeParams.id, function (data) {
      $scope.item = data;
    });

    categoryService.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.modifyItem = function (index) {
      itemService.modifyItem(index, $scope.item, function () {
      });
    };

  });

