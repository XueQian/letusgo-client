'use strict';

describe("shoppingListCtrl", function () {

  var createController, $scope, GoodsItemService, CartItemService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      CartItemService = $injector.get('CartItemService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('shoppingListCtrl', {
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

  });

  describe('when getCartItems,', function () {

    var items;

    beforeEach(function () {
      items = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1}
      ];
    });

    it('should return items to cart', function () {

      spyOn(GoodsItemService, 'getCartItems').and.callFake(function (callback) {
        callback(items);
      });
      spyOn(CartItemService, 'getTotalMoney');

      createController();

      GoodsItemService.getCartItems(function (data) {
        expect($scope.orderItems).toEqual(data);
        expect(CartItemService.getTotalMoney).toHaveBeenCalled();
      });

    });
  });

  describe('when remove,', function () {

    it('should call remove from CartItemService', function () {
      spyOn(CartItemService, 'remove');

      createController();
      $scope.remove();
      expect(CartItemService.remove).toHaveBeenCalled;
    });

    it('should call set from GoodsItemService', function () {
      spyOn(GoodsItemService, 'set');

      createController();
      $scope.remove();
      expect(GoodsItemService.set).toHaveBeenCalled;
    });

    it('it should emit to parent_totalCount===0', function () {
      spyOn($scope, '$emit');
      createController();
      $scope.remove();
      expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount===0');
    });

  });
});



