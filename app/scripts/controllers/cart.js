'use strict';

angular.module('letusgoApp')
  .controller('cartCtrl', function ($scope, GoodsItemService, CartItemService) {

    $scope.$emit('parent_cartActive');

    GoodsItemService.getCartItems(function (data) {
      $scope.cartItems = data;
    });

    $scope.$emit('parent_totalCount');

    $scope.totalMoney = CartItemService.getTotalMoney($scope.cartItems);

    $scope.changeCount = function (newCartItem) {
      _($scope.cartItems).forEach(function (cartItem) {

        if (cartItem.item.name === newCartItem.item.name) {

          cartItem.count = newCartItem.count;
        }

      });

      GoodsItemService.set('cartItems', $scope.cartItems);

      $scope.totalMoney = CartItemService.getTotalMoney($scope.cartItems);

      GoodsItemService.set('totalCount', GoodsItemService.getTotalCount($scope.cartItems));

      $scope.$emit('parent_totalCount');
    };
  });
