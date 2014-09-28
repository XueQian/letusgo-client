'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, cartService, itemService) {

    $scope.$emit('parent_goodsListActive');

    itemService.getGoodsItems(function (data) {
      $scope.itemList = data;
    });

    $scope.$emit('parent_totalCount');

    function getTotalCount() {

      cartService.getTotalCount($scope.itemList, function (data) {
        cartService.set('totalCount', data);
        $scope.$emit('parent_totalCount');
      });
    }

    $scope.addToCart = function (item) {

      cartService.addToCart(item, function () {
        getTotalCount();
      });
    };

  });


