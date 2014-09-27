'use strict';

describe("goodsListCtrl", function () {

  var createController, $scope, cartService, itemService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      cartService = $injector.get('cartService');
      itemService = $injector.get('itemService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('goodsListCtrl', {
          $scope: $scope,
          cartService: cartService,
          itemService: itemService
        });
      };
    });
  });

  describe('when load', function () {
    it('it should emit to parent_goodsListActive', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_goodsListActive');
    });

    it('it should emit to parent_totalCount', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount');
    });

  });

  describe('when getGoodsItems', function () {

    var items;

    beforeEach(function () {
      items = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1}
      ];
    });

    it('should return items to cart', function () {

      spyOn(itemService, 'getGoodsItems').and.callFake(function (callback) {
        callback(items);
      });

      createController();

      itemService.getGoodsItems(function (data) {
        expect($scope.products).toEqual(data);
      });

    });
  });

  describe('when addToCart', function () {
    var item, items;

    beforeEach(function () {
      item = {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'};
      items = [
        {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}
      ];
    });

    it('should return items to cart', function () {

      spyOn(cartService, 'addToCart').and.callFake(function (item, callback) {
        callback();
      });
      spyOn(cartService, 'getTotalCount').and.callFake(function (items, callback) {
        callback(items);
      });
      spyOn(cartService, 'set');

      createController();
      $scope.addToCart(item);

      cartService.addToCart(item, function () {
        cartService.addToCart(item, function (data) {
          expect(cartService.set).toHaveBeenCalled();
        });
      });

    });

  });

});


