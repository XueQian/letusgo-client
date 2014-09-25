'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, GoodsItemService, Operategoodsitemservice) {

    $scope.$emit('parent_goodsListActive');

    Operategoodsitemservice.getGoodsItems(function (data) {
      $scope.products = data;
    });

    $scope.$emit('parent_totalCount');

    $scope.addToCart = function (item) {

      GoodsItemService.addToCart(item, function () {

        GoodsItemService.getTotalCount($scope.products, function (data) {

          GoodsItemService.set('totalCount', data);
          $scope.$emit('parent_totalCount');
        });

      });

    };
  });


