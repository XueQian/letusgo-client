'use strict';

angular.module('letusgoApp')
  .controller('manageGoodsItemsCtrl', function ($http, $scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice) {

    $scope.$emit('parent_manageActive');

      Operategoodsitemservice.getGoodsItems(function (data) {
        $scope.products = data;
      });

    $scope.deleteCategory = function(index){

      Operategoodsitemservice.deleteGoodsItems(index);

    };

    Operatecategorieservice.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.itemList = GoodsItemService.get('itemList');

    $scope.addGoodsItems = function () {

      Operategoodsitemservice.addItem($scope.item);
    };

  });
