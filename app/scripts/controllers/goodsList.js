'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, cartService, Operategoodsitemservice) {

    $scope.$emit('parent_goodsListActive');

    Operategoodsitemservice.getGoodsItems(function (data) {
      $scope.products = data;
    });

    $scope.$emit('parent_totalCount');

    $scope.addToCart = function (item) {

      cartService.addToCart(item, function () {

        cartService.getTotalCount($scope.products, function (data) {

          cartService.set('totalCount', data);
          $scope.$emit('parent_totalCount');
        });

      });

    };
  });


