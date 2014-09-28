'use strict';

angular.module('letusgoApp')
  .controller('cartCtrl', function ($scope, cartService) {

    $scope.$emit('parent_cartActive');

    cartService.getCartItems(function (data) {
      $scope.cartItems = data;
      $scope.totalMoney = cartService.getTotalMoney($scope.cartItems);
    });

    $scope.$emit('parent_totalCount');

    function getTotalCount(){

      cartService.getTotalCount($scope.cartItems, function (data) {
      cartService.set('totalCount', data);
      $scope.$emit('parent_totalCount');

    });
    }

    $scope.changeCount = function (newCartItem) {

      cartService.changeCartItemCount(newCartItem, function (data) {
        $scope.cartItems = data;
        $scope.totalMoney = cartService.getTotalMoney($scope.cartItems);

        getTotalCount();

      });

    };
  });
