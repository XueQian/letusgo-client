'use strict';

angular.module('letusgoApp')
  .controller('manageGoodsItemsCtrl', function ($http, $scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice) {

    $scope.$emit('parent_manageActive');

      Operategoodsitemservice.getGoodsItems(function (data) {
        $scope.products = data;
      });

    $scope.deleteItems = function(index){

      Operategoodsitemservice.deleteGoodsItems(index);

      Operategoodsitemservice.getGoodsItems(function (data) {
        $scope.products = data;
      });

    };

    Operatecategorieservice.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.itemList = GoodsItemService.get('itemList');

    $scope.addGoodsItems = function () {

      Operategoodsitemservice.addItem($scope.item);
    };

  });
