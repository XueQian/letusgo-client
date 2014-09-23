//'use strict';
//
//describe("goodsListCtrl", function () {
//
//  var $scope, GoodsItemService, createController, localStorageService, Operatecategorieservice;
//
//  beforeEach(function () {
//
//    module('letusgoApp');
//
//    inject(function ($injector) {
//
//      $scope = $injector.get('$rootScope').$new();
//      GoodsItemService = $injector.get('GoodsItemService');
//      localStorageService = $injector.get('localStorageService');
//      Operatecategorieservice = $injector.get('Operatecategorieservice');
//      var $controller = $injector.get('$controller');
//
//      createController = function () {
//
//        return $controller('goodsListCtrl', {
//          $scope: $scope,
//          GoodsItemService: GoodsItemService,
//          Operatecategorieservice: Operatecategorieservice
//        });
//      };
//    });
//  });
//
//  describe('when load', function () {
//    it('it should emit to parent_goodsListActive', function () {
//      spyOn($scope, '$emit');
//      createController();
//      expect($scope.$emit).toHaveBeenCalledWith('parent_goodsListActive');
//    });
//
//    it('it should emit to parent_totalCount', function () {
//      spyOn($scope, '$emit');
//      createController();
//      expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount');
//    });
//
//    it('should call loadItems in GoodsItemService', function () {
//      spyOn(GoodsItemService, 'loadItems');
//      createController();
//      expect(GoodsItemService.loadItems).toHaveBeenCalled();
//    });
//
//    it('should call get in GoodsItemService 2 times', function () {
//      spyOn(GoodsItemService, 'get');
//      createController();
//      expect(GoodsItemService.get).toHaveBeenCalled();
//      expect(GoodsItemService.get.calls.count()).toBe(2);
//    });
//
//    it('should call set in GoodsItemService 2 times', function () {
//      spyOn(GoodsItemService, 'set');
//      createController();
//      expect(GoodsItemService.set).toHaveBeenCalled();
//      expect(GoodsItemService.set.calls.count()).toBe(2);
//    });
//
//    it('should call getTotalCount in GoodsItemService', function () {
//      spyOn(GoodsItemService, 'getTotalCount');
//      createController();
//      expect(GoodsItemService.getTotalCount).toHaveBeenCalled();
//    });
//
//  });
//
//  describe('when addToCart', function () {
//
//    it('getCategoryName should return correct val', function () {
//      var id = 0;
//      var result = {id: 0, name: '服装鞋包'};
//      spyOn(Operatecategorieservice, 'getcategoryById').and.returnValue(result);
//      createController();
//      expect($scope.getCategoryName(id)).toBe('服装鞋包');
//    });
//
//  });
//
//  describe('when addToCart', function () {
//    var itemList;
//
//    beforeEach(function () {
//      itemList = [
//        {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}
//      ];
//    });
//
//    it('should call set in GoodsItemService 4 times', function () {
//      var productItem = {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'};
//      spyOn(GoodsItemService, 'set');
//      createController();
//      $scope.addToCart(productItem);
//      expect(GoodsItemService.set).toHaveBeenCalled();
//      expect(GoodsItemService.set.calls.count()).toBe(4);
//    });
//
//    it('should call addToCartList in GoodsItemService', function () {
//      var productItem = {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'};
//      spyOn(GoodsItemService, 'addToCartList');
//      createController();
//      $scope.addToCart(productItem);
//      expect(GoodsItemService.addToCartList).toHaveBeenCalled();
//    });
//
//    it('it should emit to parent_totalCount 3 times', function () {
//      var productItem = {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'};
//      spyOn($scope, '$emit');
//      createController();
//      $scope.addToCart(productItem);
//      expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount');
//      expect($scope.$emit.calls.count()).toBe(3);
//    });
//
//    it('products should return correct value', function () {
//      spyOn(GoodsItemService, 'get').and.returnValue(itemList);
//      createController();
//      expect($scope.products[0].name).toEqual('服装１');
//    });
//
//    it('cartList=null,should return correct value', function () {
//      var productItem = {};
//      var cartList = null;
//      spyOn(GoodsItemService, 'get').and.returnValue(cartList);
//      createController();
//      $scope.addToCart(productItem);
//      expect(GoodsItemService.getTotalCount(cartList)).toBe(0);
//    });
//
//  });
//
//});
//
//
//
