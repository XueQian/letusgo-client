'use strict';

angular.module('letusgoApp')
  .controller('modifyCategoryCtrl', function ($scope, Operatecategorieservice,$routeParams) {

    $scope.$emit('parent_manageGoodsActive');

      Operatecategorieservice.getcategoryById($routeParams.id,function(data){
        $scope.category = data;
      });

    $scope.modifyCategory = function (index) {
      Operatecategorieservice.modifyCategory(index,$scope.category,function(data){
        $scope.categories = data;
      });
    };

  });



