'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, GoodsItemService, Operatecategorieservice,Operategoodsitemservice) {

    $scope.$emit('parent_goodsListActive');

    Operategoodsitemservice.getGoodsItems(function (data) {
      $scope.products = data;
    });


    $scope.$emit('parent_totalCount');

    $scope.addToCart = function (item) {

      GoodsItemService.addToCart(item);

        GoodsItemService.getCartItems(function (data) {

          var cartItems = data;
          GoodsItemService.getTotalCount(cartItems,function(data){
            $scope.totalCount=data;
          });

      });
      $scope.$emit('parent_totalCount');
    };
  });


