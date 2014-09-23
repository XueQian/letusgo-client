'use strict';

angular.module('letusgoApp')
  .controller('manageCategoryCtrl', function ($scope, Operatecategorieservice, GoodsItemService, Operategoodsitemservice) {

    $scope.$emit('parent_manageActive');

    Operatecategorieservice.getCategories(function (data) {
      $scope.categories = data;
    });

    $scope.getItemById = function (id) {

      return Operategoodsitemservice.getItemById(id);
    };

    $scope.deleteCategory = function (index) {

        Operatecategorieservice.deleteCategory(index);
    };

    $scope.addCategory = function () {

      Operatecategorieservice.addCategory($scope.category);

    };

  });
