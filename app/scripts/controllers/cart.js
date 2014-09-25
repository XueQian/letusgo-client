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

      GoodsItemService.changeCartItemCount(newCartItem,function(data){

          $scope.cartItems = data;


      });

      GoodsItemService.updateCart(newCartItem,function(data){

        $scope.cartItems=data;

      });

      $scope.totalMoney = CartItemService.getTotalMoney($scope.cartItems);

      GoodsItemService.getTotalCount($scope.products,function(data){
        GoodsItemService.set('totalCount',data);
      });

      $scope.$emit('parent_totalCount');
    };
  });
