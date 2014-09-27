'use strict';

angular.module('letusgoApp')
  .controller('shoppingListCtrl', function ($scope, cartService, CartItemService) {

    $scope.$emit('parent_cartActive');

    cartService.getCartItems(function (data) {
      $scope.orderItems = data;
      $scope.totalMoney = CartItemService.getTotalMoney($scope.orderItems);
    });

    $scope.$emit('parent_totalCount');

    $scope.remove = function () {

      CartItemService.remove();

      cartService.set('totalCount', 0);

      $scope.$emit('parent_totalCount===0');
    };
  });

