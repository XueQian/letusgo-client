'use strict';

angular.module('letusgoApp')
  .controller('shoppingListCtrl', function ($scope, CartService) {

    $scope.$emit('parent_cartActive');

    CartService.getCartItems(function (data) {
      $scope.boughtItems = data;
      $scope.totalMoney = CartService.getTotalMoney($scope.boughtItems);
    });

    $scope.$emit('parent_totalCount');

    $scope.remove = function () {

      CartService.remove();
      CartService.set('totalCount', 0);
      $scope.$emit('parent_totalCount is zero');
    };
  });

