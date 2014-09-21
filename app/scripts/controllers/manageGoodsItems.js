'use strict';

angular.module('letusgoApp')
  .controller('manageGoodsItemsCtrl', function ($http, $scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice) {

    $scope.$emit('parent_manageActive');

      Operategoodsitemservice.getGoodsItems(function (data) {
        $scope.products = data;
      });

//    $http({method:'POST',url:'/api/items',data:'data'}).success(function (itemList) {
//
//      });

    $scope.deleteCategory = function (index) {

      $scope.products.splice(index, 1);

      GoodsItemService.set('itemList', $scope.products);
    };

    Operatecategorieservice.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.itemList = GoodsItemService.get('itemList');

    $scope.addGoodsItems = function () {

      Operategoodsitemservice.addGoodsItems($scope.item, $scope.itemList);
    };

  });
