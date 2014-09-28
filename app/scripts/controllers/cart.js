'use strict';

angular.module('letusgoApp')
  .controller('cartCtrl', function ($scope, CartService) {

    $scope.$emit('parent_cartActive');

    function getCartItems(data) {

      $scope.cartItems = data;
      $scope.totalMoney = CartService.getTotalMoney($scope.cartItems);
    }

    CartService.getCartItems(function (data) {
      getCartItems(data);
    });

    $scope.$emit('parent_totalCount');

    function getTotalCount() {

      CartService.getTotalCount($scope.cartItems, function (data) {
        CartService.set('totalCount', data);
        $scope.$emit('parent_totalCount');
      });
    }

    $scope.changeCount = function (newCartItem) {

      CartService.changeCartItemCount(newCartItem, function (data) {

        getCartItems(data);
        getTotalCount();
      });
    };

  });
