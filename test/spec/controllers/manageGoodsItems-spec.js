//'use strict';
//
//describe("manageGoodsItemsCtrl", function () {
//
//  var createController, $scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice, localStorageService;
//
//  beforeEach(function () {
//
//    module('letusgoApp');
//
//    inject(function ($injector) {
//
//      $scope = $injector.get('$rootScope').$new();
//      GoodsItemService = $injector.get('GoodsItemService');
//      Operatecategorieservice = $injector.get('Operatecategorieservice');
//      Operategoodsitemservice = $injector.get('Operategoodsitemservice');
//      localStorageService = $injector.get('localStorageService');
//      var $controller = $injector.get('$controller');
//
//      createController = function () {
//
//        return $controller('manageGoodsItemsCtrl', {
//          $scope: $scope,
//          GoodsItemService: GoodsItemService,
//          Operatecategorieservice: Operatecategorieservice,
//          Operategoodsitemservice: Operategoodsitemservice,
//          localStorageService: localStorageService
//
//        });
//      };
//    });
//  });
//
//  describe('when load', function () {
//
//    it('it should emit to parent_manageActive', function () {
//      spyOn($scope, '$emit');
//      createController();
//      expect($scope.$emit).toHaveBeenCalledWith('parent_manageActive');
//    });
//
//    it('should call loadGoodsItems in Operategoodsitemservice', function () {
//      spyOn(Operategoodsitemservice, 'loadGoodsItems');
//      createController();
//      expect(Operategoodsitemservice.loadGoodsItems).toHaveBeenCalled();
//    });
//
//    it('should call loadcategories in Operatecategorieservice', function () {
//      spyOn(Operatecategorieservice, 'loadcategories');
//      createController();
//      expect(Operatecategorieservice.loadcategories).toHaveBeenCalled();
//    });
//
//    it('should call loadcategories in GoodsItemService', function () {
//      spyOn(GoodsItemService, 'get');
//      createController();
//      expect(GoodsItemService.get).toHaveBeenCalled();
//    });
//
//  });
//
//  describe('when getCategoryName', function () {
//
//    it('should return correct value', function () {
//      var id = 0;
//      createController();
//      spyOn(Operatecategorieservice, 'getcategoryById').and.returnValue({id: 0, name: '0'});
//      $scope.getCategoryName(id);
//      expect($scope.getCategoryName(id)).toBe('0');
//    });
//
//  });
//
//  describe('when deleteCategory', function () {
//
//    it('should call set in GoodsItemService and should call splice', function () {
//      var index = 1;
//      $scope.products = [
//        {barcode: 1, name: '测试1'},
//        {barcode: 2, name: '测试2'}
//      ];
//      createController();
//      spyOn($scope.products, 'splice');
//      spyOn(GoodsItemService, 'set');
//      $scope.deleteCategory(index);
//      expect($scope.products.splice).toHaveBeenCalledWith(index, 1);
//      expect(GoodsItemService.set).toHaveBeenCalledWith('itemList', $scope.products);
//
//    });
//
//  });
//
//  describe('when deleteCategory', function () {
//
//    it('should call addGoodsItems in Operategoodsitemservice', function () {
//      $scope.item = {};
//      $scope.itemList = [
//        {}
//      ];
//      createController();
//      spyOn(Operategoodsitemservice, 'addGoodsItems');
//      $scope.addGoodsItems();
//      expect(Operategoodsitemservice.addGoodsItems).toHaveBeenCalledWith($scope.item, $scope.itemList);
//    })
//
//  });
//
//});
