'use strict';

angular.module('letusgoApp')
  .controller('cartCtrl', function ($scope, cartService, CartItemService) {

    $scope.$emit('parent_cartActive');

    cartService.getCartItems(function (data) {
      $scope.cartItems = data;
      $scope.totalMoney = CartItemService.getTotalMoney($scope.cartItems);
    });

    $scope.$emit('parent_totalCount');

    $scope.changeCount = function (newCartItem) {

      cartService.changeCartItemCount(newCartItem, function (data) {

        $scope.cartItems = data;
        $scope.totalMoney = CartItemService.getTotalMoney($scope.cartItems);

        cartService.getTotalCount($scope.cartItems, function (data) {

          cartService.set('totalCount', data);
          $scope.$emit('parent_totalCount');
        });

      });

    };
  });
