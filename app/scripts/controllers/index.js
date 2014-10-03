'use strict';

angular.module('letusgoApp')
  .controller('indexCtrl', function ($scope, CartService) {
    $scope.$emit('parent_indexActive');

    $scope.$on('parent_totalCount', function () {

      CartService.getCartItems(function (data) {

          $scope.totalCount = CartService.getTotalCount(data);
      });
    });

    $scope.$on('parent_totalCount is zero', function () {

      $scope.totalCount = 0;
    });

    $scope.$on('parent_indexActive', function () {

      $scope.indexActive = true;
      $scope.itemListActive = false;
      $scope.cartActive = false;
      $scope.manageActive = false;
    });

    $scope.$on('parent_itemListActive', function () {

      $scope.indexActive = false;
      $scope.itemListActive = true;
      $scope.cartActive = false;
      $scope.manageActive = false;
    });

    $scope.$on('parent_cartActive', function () {

      $scope.indexActive = false;
      $scope.itemListActive = false;
      $scope.cartActive = true;
      $scope.manageActive = false;
    });

    $scope.$on('parent_manageActive', function () {

      $scope.indexActive = false;
      $scope.itemListActive = false;
      $scope.cartActive = false;
      $scope.manageActive = true;
    });


  });
