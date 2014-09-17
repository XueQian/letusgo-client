'use strict';

describe("cartCtrl", function () {

  var $scope, GoodsItemService, createController, localStorageService, CartItemService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      localStorageService = $injector.get('localStorageService');
      CartItemService = $injector.get('CartItemService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('cartCtrl', {
          $scope: $scope,
          GoodsItemService: GoodsItemService,
          CartItemService: CartItemService
        });
      };
    });
  });

  describe('when load', function () {
    it('it should emit to parent_cartActive', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_cartActive');
    });

    it('it should emit to parent_totalCount', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount');
    });

    it('should call get in GoodsItemService', function () {
      spyOn(GoodsItemService, 'get');
      createController();
      expect(GoodsItemService.get).toHaveBeenCalled();
    });

    it('should call getTotalMoney in CartItemService', function () {
      spyOn(CartItemService, 'getTotalMoney');
      createController();
      expect(CartItemService.getTotalMoney).toHaveBeenCalled();
    });

  });

  describe('when changeCount,', function () {

    var item_;

    beforeEach(function () {
       item_ =
      {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1};
    });

    it('same name, count=count', function () {

      spyOn(CartItemService, 'getTotalMoney');

      var cartItems = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 0}
      ];
      spyOn(GoodsItemService, 'get').and.returnValue(cartItems);

      createController();
      $scope.changeCount(item_);
      var result = $scope.cartItems[0].count;

      expect(result).toEqual(1);
    });

    it('different name, count!=count', function () {

      spyOn(CartItemService, 'getTotalMoney');

      var cartItems = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装2', 'price': 11, 'unit': '件'}, count: 0}
      ];
      spyOn(GoodsItemService, 'get').and.returnValue(cartItems);

      createController();
      $scope.changeCount(item_);
      var result = $scope.cartItems[0].count;

      expect(result).not.toEqual(1);
    });

    it('should call set in GoodsItemService 2 times', function () {
      spyOn(GoodsItemService, 'set');
      createController();
      $scope.changeCount(item_);
      expect(GoodsItemService.set).toHaveBeenCalled();
      expect(GoodsItemService.set.calls.count()).toBe(2);
    });

    it('should call getTotalMoney in CartItemService 2 times', function () {
      spyOn(CartItemService, 'getTotalMoney');
      createController();
      $scope.changeCount(item_);
      expect(CartItemService.getTotalMoney).toHaveBeenCalled();
      expect(CartItemService.getTotalMoney.calls.count()).toBe(2);
    });

    it('it should emit to parent_totalCount', function () {
      spyOn($scope, '$emit');
      createController();
      $scope.changeCount(item_);
      expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount');
    });

  });

});
