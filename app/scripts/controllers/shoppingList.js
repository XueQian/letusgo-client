'use strict';

angular.module('letusgoApp')
  .controller('shoppingListCtrl', function ($scope, cartService) {

    $scope.$emit('parent_cartActive');

    cartService.getCartItems(function (data) {
      $scope.orderItems = data;
      $scope.totalMoney = cartService.getTotalMoney($scope.orderItems);
    });

    $scope.$emit('parent_totalCount');

    $scope.remove = function () {

      cartService.remove();

      cartService.set('totalCount', 0);

      $scope.$emit('parent_totalCount is zero');
    };
  });

