'use strict';

angular.module('letusgoApp')
  .controller('indexCtrl', function ($scope, itemService) {
    $scope.$emit('parent_indexActive');

    $scope.$on('parent_totalCount', function () {

      itemService.getCartItems(function (data) {

        var cartItems = data;
        itemService.getTotalCount(cartItems, function (data) {
          $scope.totalCount = data;
        });
      });

    });

    $scope.$on('parent_totalCount===0', function () {

      $scope.totalCount = 0;
    });

    $scope.$on('parent_indexActive', function () {

      $scope.indexActive = true;
      $scope.goodsListActive = false;
      $scope.cartActive = false;
      $scope.manageActive = false;
    });

    $scope.$on('parent_goodsListActive', function () {

      $scope.indexActive = false;
      $scope.goodsListActive = true;
      $scope.cartActive = false;
      $scope.manageActive = false;
    });

    $scope.$on('parent_cartActive', function () {

      $scope.indexActive = false;
      $scope.goodsListActive = false;
      $scope.cartActive = true;
      $scope.manageActive = false;
    });

    $scope.$on('parent_manageActive', function () {

      $scope.indexActive = false;
      $scope.goodsListActive = false;
      $scope.cartActive = false;
      $scope.manageActive = true;
    });


  });
