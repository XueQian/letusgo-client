'use strict';

angular.module('letusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, Operatecategorieservice, Operategoodsitemservice, $routeParams) {

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

  });

