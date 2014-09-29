'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, CartService, ItemService) {

    function EventName(){
      this.PARENT_ITEMLIST_ACTIVE='parent_itemListActive';
      this.PARENT_TOTAL_COUNT='parent_totalCount';
    }

    $scope.$emit(new EventName().PARENT_ITEMLIST_ACTIVE);

    ItemService.getGoodsItems(function (data) {
      $scope.itemList = data;
    });

    $scope.$emit(new EventName().PARENT_TOTAL_COUNT);

    function getTotalCount() {

      CartService.getTotalCount($scope.itemList, function (data) {
        CartService.set('totalCount', data);
        $scope.$emit(new EventName().PARENT_TOTAL_COUNT);
      });
    }

    $scope.addToCart = function (item) {

      CartService.addToCart(item, function () {
        getTotalCount();
      });
    };

  });


