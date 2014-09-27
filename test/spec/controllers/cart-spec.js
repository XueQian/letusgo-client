'use strict';

describe("cartCtrl", function () {

  var createController, $scope, itemService, CartItemService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      itemService = $injector.get('itemService');
      CartItemService = $injector.get('CartItemService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('cartCtrl', {
          $scope: $scope,
          itemService: itemService,
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

      spyOn(itemService, 'getCartItems').and.callFake(function (callback) {
        callback(items);
      });
      spyOn(CartItemService, 'getTotalMoney');

      createController();

      itemService.getCartItems(function (data) {
        expect($scope.cartItems).toEqual(data);
        expect(CartItemService.getTotalMoney).toHaveBeenCalled();
      });

    });
  });

  describe('when changeCount,', function () {

    var item, items;

    beforeEach(function () {
      item =
      {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1};
      items = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1}
      ];
    });

    it('should return items to cart', function () {

      spyOn(itemService, 'changeCartItemCount').and.callFake(function (item, callback) {
        callback(items);
      });
      spyOn(CartItemService, 'getTotalMoney');

      createController();
      $scope.changeCount(item);

      itemService.changeCartItemCount(item, function (data) {
        expect($scope.cartItems).toEqual(data);
        expect(CartItemService.getTotalMoney).toHaveBeenCalled();
      });

    });

  });

});
