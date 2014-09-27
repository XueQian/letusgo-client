'use strict';

describe("manageGoodsItemsCtrl", function () {

  var createController, $location, $scope, categoryService, itemService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $location = $injector.get('$location');
      categoryService = $injector.get('categoryService');
      itemService = $injector.get('itemService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('manageGoodsItemsCtrl', {
          $scope: $scope,
          categoryService: categoryService,
          itemService: itemService,
          $location: $location

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

  });

  describe('when getGoodsItems', function () {

    var items;

    beforeEach(function () {
      items = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1}
      ];
    });

    it('should return goodsItems', function () {

      spyOn(itemService, 'getGoodsItems').and.callFake(function (callback) {
        callback(items);
      });

      createController();

      itemService.getGoodsItems(function (data) {
        expect($scope.products).toEqual(data);
      });

    });
  });

  describe('when deleteItems', function () {

    it('should call deleteGoodsItems in itemService', function () {

      var index = 0;
      spyOn(itemService, 'deleteGoodsItems');

      createController();
      $scope.deleteItems(index);
      expect(itemService.deleteGoodsItems).toHaveBeenCalledWith(index);

    });

    it('should get goodsItems', function () {

      var items = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1}
      ];
      var index = 0;

      spyOn(itemService, 'getGoodsItems').and.callFake(function (callback) {
        callback(items);
      });

      createController();
      $scope.deleteItems(index);

      itemService.getGoodsItems(function (data) {
        expect($scope.products).toEqual(data);
      });
    });

  });

  describe('when getCategories', function () {

    var categories;

    beforeEach(function () {
      categories = [
        {id: 0, name: '服装鞋包'}
      ];
    });

    it('should return items to cart', function () {

      spyOn(categoryService, 'getCategories').and.callFake(function (callback) {
        callback(categories);
      });

      createController();

      categoryService.getCategories(function (data) {
        expect($scope.categories).toEqual(data);
      });

    });

  });

  describe('when addGoodsItems', function () {

    var items, item;

    beforeEach(function () {
      items = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1}
      ];
      item = {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'};
    });

    it('should return items after add', function () {

      spyOn(itemService, 'addItem').and.callFake(function (item, callback) {
        callback(items);
      });

      createController();
      $scope.addGoodsItems();

      itemService.addItem(item, function (data) {
        expect($scope.products).toEqual(data);
      });

    });
  });

});
