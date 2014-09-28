'use strict';

angular.module('letusgoApp')
  .controller('cartCtrl', function ($scope, cartService) {

    $scope.$emit('parent_cartActive');

    function getCartItems(data){

      $scope.cartItems = data;
      $scope.totalMoney = cartService.getTotalMoney($scope.cartItems);
    }

    cartService.getCartItems(function (data) {
      getCartItems(data);
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

        getCartItems(data);
        getTotalCount();
      });
    };

  });
