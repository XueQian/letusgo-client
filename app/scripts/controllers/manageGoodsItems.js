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

    $scope.getCategoryName = function (id) {
      return Operatecategorieservice.getcategoryById(id, null).name;
    };

    $scope.deleteCategory = function (index) {

      $scope.products.splice(index, 1);

      GoodsItemService.set('itemList', $scope.products);
    };

    $scope.categories = Operatecategorieservice.loadcategories();

    $scope.itemList = GoodsItemService.get('itemList');

    $scope.addGoodsItems = function () {

      Operategoodsitemservice.addGoodsItems($scope.item, $scope.itemList);
    };

  });
