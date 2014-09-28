'use strict';

describe("manageCategoryCtrl", function () {

  var createController, $scope, $location, categoryService, itemService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $location = $injector.get('$location');
      categoryService = $injector.get('categoryService');
      itemService = $injector.get('itemService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('manageCategoryCtrl', {
          $scope: $scope,
          $location: $location,
          categoryService: categoryService,
          itemService: itemService
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

  describe('when getItem', function () {

    it('should call getItem in itemService', function () {

      var id = 0;
      spyOn(itemService, 'getItem');

      createController();
      $scope.getItem(id);
      expect(itemService.getItem).toHaveBeenCalledWith(id);

    });

  });

  describe('when deleteCategory', function () {

    it('should call deleteCategory in categoryService', function () {

      var index = 0;
      spyOn(categoryService, 'deleteCategory');

      createController();
      $scope.deleteCategory(index);
      expect(categoryService.deleteCategory).toHaveBeenCalledWith(index);

    });

    it('should get categories', function () {

      var categories = [
        {id: 0, name: '服装鞋包'}
      ];
      var index = 0;

      spyOn(categoryService, 'getCategories').and.callFake(function (callback) {
        callback(categories);
      });

      createController();
      $scope.deleteCategory(index);

      categoryService.getCategories(function (data) {
        expect($scope.categories).toEqual(data);
      });
    });

  });

  describe('when addCategory', function () {

    var categories, category;

    beforeEach(function () {
      categories = [
        {id: 0, name: '服装鞋包'}
      ];
      category = {id: 0, name: '服装鞋包'};
    });

    it('should return categories after add', function () {

      spyOn(categoryService, 'addCategory').and.callFake(function (category, callback) {
        callback(categories);
      });

      createController();
      $scope.addCategory();

      categoryService.addCategory(category, function (data) {
        expect($scope.categories).toEqual(data);
      });

    });
  });

});





