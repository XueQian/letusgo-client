'use strict';

describe("goodsListCtrl", function () {

  var createController, $scope, itemService, Operategoodsitemservice;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      itemService = $injector.get('itemService');
      Operategoodsitemservice = $injector.get('Operategoodsitemservice');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('goodsListCtrl', {
          $scope: $scope,
          itemService: itemService,
          Operategoodsitemservice: Operategoodsitemservice
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

      spyOn(Operategoodsitemservice, 'getGoodsItems').and.callFake(function (callback) {
        callback(items);
      });

      createController();

      Operategoodsitemservice.getGoodsItems(function (data) {
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

      spyOn(itemService, 'addToCart').and.callFake(function (item, callback) {
        callback();
      });
      spyOn(itemService, 'getTotalCount').and.callFake(function (items, callback) {
        callback(items);
      });
      spyOn(itemService, 'set');

      createController();
      $scope.addToCart(item);

      itemService.addToCart(item, function () {
        itemService.addToCart(item, function (data) {
          expect(itemService.set).toHaveBeenCalled();
        });
      });

    });

  });

});


