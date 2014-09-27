'use strict';

angular.module('letusgoApp')
  .controller('shoppingListCtrl', function ($scope, itemService, CartItemService) {

    $scope.$emit('parent_cartActive');

    itemService.getCartItems(function (data) {
      $scope.orderItems = data;
      $scope.totalMoney = CartItemService.getTotalMoney($scope.orderItems);
    });

    $scope.$emit('parent_totalCount');

    $scope.remove = function () {

      CartItemService.remove();

      itemService.set('totalCount', 0);

      $scope.$emit('parent_totalCount===0');
    };
  });

