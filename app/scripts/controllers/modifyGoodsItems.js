'use strict';

angular.module('letusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    Operategoodsitemservice.getItemById($routeParams.id, function(data) {
      $scope.item = data;
    });

    Operatecategorieservice.getCategories(function (data) {
      $scope.categories = data;
    });


    $scope.modifyItem = function (index) {
      Operategoodsitemservice.modifyItem(index,$scope.item,function(){
      });
    };

//    $scope.categories = Operatecategorieservice.loadcategories();
//
//    $scope.category = _.find($scope.categories, function (category) {
//
//      return category.id == $scope.itemList.category;
//    });

//    $scope.modifyGoods = function () {
//
////      $scope.itemList.category = $scope.category.id;
//      Operategoodsitemservice.modifyGoods($scope.itemList);
//    };
//    Operategoodsitemservice.modifyGoods($scope.itemList,function (data) {
//      $scope.modifyGoods = data;
//      console.log($scope.modifyGoods);
//    });




  });

