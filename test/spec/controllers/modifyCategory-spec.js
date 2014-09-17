'use strict';

describe("modifyCategoryCtrl", function () {

  var createController, $scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice, $routeParams;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      Operatecategorieservice = $injector.get('Operatecategorieservice');
      Operategoodsitemservice = $injector.get('Operategoodsitemservice');
      $routeParams = $injector.get('$routeParams');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('modifyCategoryCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
          Operatecategorieservice: Operatecategorieservice,
          Operategoodsitemservice: Operategoodsitemservice,
          $routeParams: $routeParams
        });
      };
    });
  });

  describe('when load', function () {

    it('it should emit to parent_goodsListActive', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_manageGoodsActive');
    });

    it('should call getcategoryById in Operatecategorieservice', function () {
      spyOn(Operatecategorieservice, 'getcategoryById');
      createController();
      expect(Operatecategorieservice.getcategoryById).toHaveBeenCalled();
    });

    it('should call loadcategories in Operatecategorieservice', function () {
      spyOn(Operatecategorieservice, 'loadcategories');
      createController();
      expect(Operatecategorieservice.loadcategories).toHaveBeenCalled();
    });

  });

  describe('when modifyCategory', function () {

    it('should call modifyCategory in Operatecategorieservice', function () {
      $scope.category = {};
      createController();
      spyOn(Operatecategorieservice, 'modifyCategory');
      $scope.modifyCategory();
      expect(Operatecategorieservice.modifyCategory).toHaveBeenCalledWith($scope.category);
    });

  });

});
