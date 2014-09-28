'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, CartService, itemService) {

    $scope.$emit('parent_goodsListActive');

    itemService.getGoodsItems(function (data) {
      $scope.itemList = data;
    });

    $scope.$emit('parent_totalCount');

    function getTotalCount() {

      CartService.getTotalCount($scope.itemList, function (data) {
        CartService.set('totalCount', data);
        $scope.$emit('parent_totalCount');
      });
    }

    $scope.addToCart = function (item) {

      CartService.addToCart(item, function () {
        getTotalCount();
      });
    };

  });


