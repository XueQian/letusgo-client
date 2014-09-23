'use strict';

angular.module('letusgoApp')
  .controller('shoppingListCtrl', function ($scope, GoodsItemService, CartItemService) {

    $scope.$emit('parent_cartActive');

    GoodsItemService.getCartItems(function (data) {
      $scope.orderItems = data;
    });

    $scope.$emit('parent_totalCount');

    $scope.totalMoney = CartItemService.getTotalMoney($scope.orderItems);

    $scope.remove = function () {

      CartItemService.remove('cartItems');

      GoodsItemService.set('totalCount', 0);

      $scope.$emit('parent_totalCount===0');
    };
  });

