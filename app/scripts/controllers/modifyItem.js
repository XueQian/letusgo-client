'use strict';

angular.module('letusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, CategoryService, itemService, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    itemService.getItem($routeParams.id, function (data) {
      $scope.item = data;
    });

    CategoryService.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.modifyItem = function (index) {
      itemService.modifyItem(index, $scope.item, function () {
      });
    };

  });

