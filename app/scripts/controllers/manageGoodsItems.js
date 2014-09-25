'use strict';

angular.module('letusgoApp')
  .controller('manageGoodsItemsCtrl', function ($http,$location, $scope, Operatecategorieservice, Operategoodsitemservice) {

    $scope.$emit('parent_manageActive');

      Operategoodsitemservice.getGoodsItems(function (data) {
        $scope.products = data;
      });

    $scope.deleteItems = function(index){

      Operategoodsitemservice.deleteGoodsItems(index);

      Operategoodsitemservice.getGoodsItems(function (data) {
        $scope.products = data;
      });

    };

    Operatecategorieservice.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.addGoodsItems = function () {

      Operategoodsitemservice.addItem($scope.item,function(data){
        $scope.products = data;
        $location.path('/manageGoodsItems');

      });
    };

  });
