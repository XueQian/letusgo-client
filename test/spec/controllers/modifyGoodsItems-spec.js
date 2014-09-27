'use strict';

describe("modifyGoodsItemsCtrl", function () {

  var createController, $scope, categoryService, itemService, $routeParams;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      categoryService = $injector.get('categoryService');
      itemService = $injector.get('itemService');
      $routeParams = $injector.get('$routeParams');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('modifyGoodsItemsCtrl', {
          $scope: $scope,
          categoryService: categoryService,
          itemService: itemService,
          $routeParams: $routeParams
        });
      };
    });
  });

  describe('when load', function () {

    it('it should emit to parent_manageGoodsActive', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_manageGoodsActive');
    });

  });

  describe('when getItemById', function () {

    it('should return item by id ', function () {
      var id = 0;
      var item = {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'};

      spyOn(itemService, 'getItemById').and.callFake(function (id, callback) {
        callback(item);
      });

      createController();

      itemService.getItemById(id, function (data) {
        expect($scope.item).toEqual(data);
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

  describe('when modifyItem', function () {

    it('should return items after modify', function () {
      var index = 0;
      var item = {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'};
      var items = [
        {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1}
      ];

      spyOn(itemService, 'modifyItem').and.callFake(function (index, item, callback) {
        callback(items);
      });

      createController();
      $scope.modifyItem(index);
//      expect(itemService.modifyItem).toHaveBeenCalledWith(index,item,function(){});

    });

  });


});
