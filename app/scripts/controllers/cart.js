'use strict';

angular.module('letusgoApp')
  .controller('cartCtrl', function ($scope, itemService, CartItemService) {

    $scope.$emit('parent_cartActive');

    itemService.getCartItems(function (data) {
      $scope.cartItems = data;
      $scope.totalMoney = CartItemService.getTotalMoney($scope.cartItems);
    });

    $scope.$emit('parent_totalCount');

    $scope.changeCount = function (newCartItem) {

      itemService.changeCartItemCount(newCartItem, function (data) {

        $scope.cartItems = data;
        $scope.totalMoney = CartItemService.getTotalMoney($scope.cartItems);

        itemService.getTotalCount($scope.cartItems, function (data) {

          itemService.set('totalCount', data);
          $scope.$emit('parent_totalCount');
        });

      });

    };
  });
