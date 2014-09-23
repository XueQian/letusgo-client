'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, GoodsItemService, Operatecategorieservice,Operategoodsitemservice) {

    $scope.$emit('parent_goodsListActive');

    Operategoodsitemservice.getGoodsItems(function (data) {
      $scope.products = data;
    });

    var cartList = GoodsItemService.get('cartItems');

    $scope.getCategoryName = function (id) {
      return Operatecategorieservice.getcategoryById(id, null).name;
    };
    GoodsItemService.set('totalCount', GoodsItemService.getTotalCount(cartList));

    $scope.products = GoodsItemService.get('itemList');
    $scope.$emit('parent_totalCount');

    $scope.addToCart = function (item) {

      cartList = GoodsItemService.addToCart(item);

      GoodsItemService.set('totalCount', GoodsItemService.getTotalCount(cartList));

      $scope.$emit('parent_totalCount');
    };
  });


