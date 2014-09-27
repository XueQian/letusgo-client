'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, itemService, Operategoodsitemservice) {

    $scope.$emit('parent_goodsListActive');

    Operategoodsitemservice.getGoodsItems(function (data) {
      $scope.products = data;
    });

    $scope.$emit('parent_totalCount');

    $scope.addToCart = function (item) {

      itemService.addToCart(item, function () {

        itemService.getTotalCount($scope.products, function (data) {

          itemService.set('totalCount', data);
          $scope.$emit('parent_totalCount');
        });

      });

    };
  });


