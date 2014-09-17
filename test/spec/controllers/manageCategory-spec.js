'use strict';

describe("manageCategoryCtrl", function () {

  var $scope, GoodsItemService, createController, localStorageService, Operatecategorieservice, Operategoodsitemservice;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      localStorageService = $injector.get('localStorageService');
      Operatecategorieservice = $injector.get('Operatecategorieservice');
      Operategoodsitemservice = $injector.get('Operategoodsitemservice');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('manageCategoryCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
          Operatecategorieservice: Operatecategorieservice,
          Operategoodsitemservice: Operategoodsitemservice
        });
      };
    });
  });

  describe('when load', function () {
    it('it should emit to parent_manageActive', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_manageActive');
    });

    it('should call loadcategories in Operatecategorieservice', function () {
      spyOn(Operatecategorieservice, 'loadcategories');
      createController();
      expect(Operatecategorieservice.loadcategories).toHaveBeenCalled();
    });

  });

  describe('when getItemById', function () {

    it('should return correct value and should call getItemById in Operategoodsitemservice ', function () {
      var id = 1;
      var result = true;
      spyOn(Operategoodsitemservice, 'getItemById').and.returnValue(result);
      createController();
      expect($scope.getItemById(id)).toBe(true);
      expect(Operategoodsitemservice.getItemById).toHaveBeenCalled();
    });

  });

  describe('when deleteCategory', function () {

    it('should call set in GoodsItemService and should call splice', function () {
      var id = 1;
      var index = 1;
      var result = true;
      $scope.categories = [
        {id: 1, name: '1'},
        {id: 2, name: '2'}
      ];
      createController();
      spyOn(Operategoodsitemservice, 'getItemById').and.returnValue(result);
      spyOn($scope.categories, 'splice');
      spyOn(GoodsItemService, 'set');
      $scope.deleteCategory(index, id);
      expect(GoodsItemService.set).toHaveBeenCalled();
      expect($scope.categories.splice).toHaveBeenCalledWith(index, id);
    });

    it('deleteCategory when false', function () {
      var id = 1;
      var index = 1;
      var result = false;
      $scope.categories = [
        {id: 1, name: '1'},
        {id: 2, name: '2'}
      ];
      createController();
      spyOn(Operategoodsitemservice, 'getItemById').and.returnValue(result);
      spyOn($scope.categories, 'splice');
      spyOn(GoodsItemService, 'set');
      $scope.deleteCategory(index, id);
    });

  });

  describe('when addCategory', function () {

    it('should return correct value ', function () {
      $scope.category = {id: 1, name: '1'};
      $scope.categories = [
        {id: 1, name: '1'},
        {id: 2, name: '2'}
      ];
      spyOn(Operatecategorieservice, 'addCategory');

      createController();
      $scope.addCategory();
      expect(Operatecategorieservice.addCategory).toHaveBeenCalledWith($scope.category, $scope.categories);

    });

  });

});





