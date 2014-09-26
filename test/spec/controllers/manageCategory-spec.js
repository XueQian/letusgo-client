'use strict';

describe("manageCategoryCtrl", function () {

  var createController, $scope, $location, Operatecategorieservice, Operategoodsitemservice;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      $location = $injector.get('$location');
      Operatecategorieservice = $injector.get('Operatecategorieservice');
      Operategoodsitemservice = $injector.get('Operategoodsitemservice');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('manageCategoryCtrl', {
          $scope: $scope,
          $location: $location,
          Operatecategorieservice: Operatecategorieservice,
          Operategoodsitemservice: Operategoodsitemservice
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

      spyOn(Operatecategorieservice, 'getCategories').and.callFake(function (callback) {
        callback(categories);
      });

      createController();

      Operatecategorieservice.getCategories(function (data) {
        expect($scope.categories).toEqual(data);
      });

    });

  });

  describe('when getItemById', function () {

    it('should call getItemById in Operategoodsitemservice', function () {

      var id = 0;
      spyOn(Operategoodsitemservice, 'getItemById');

      createController();
      $scope.getItemById(id);
      expect(Operategoodsitemservice.getItemById).toHaveBeenCalledWith(id);

    });

  });

  describe('when deleteCategory', function () {

    it('should call deleteCategory in Operatecategorieservice', function () {

      var index = 0;
      spyOn(Operatecategorieservice, 'deleteCategory');

      createController();
      $scope.deleteCategory(index);
      expect(Operatecategorieservice.deleteCategory).toHaveBeenCalledWith(index);

    });

    it('should get categories', function () {

      var categories = [
        {id: 0, name: '服装鞋包'}
      ];
      var index = 0;

      spyOn(Operatecategorieservice, 'getCategories').and.callFake(function (callback) {
        callback(categories);
      });

      createController();
      $scope.deleteCategory(index);

      Operatecategorieservice.getCategories(function (data) {
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

      spyOn(Operatecategorieservice, 'addCategory').and.callFake(function (category, callback) {
        callback(categories);
      });

      createController();
      $scope.addCategory();

      Operatecategorieservice.addCategory(category, function (data) {
        expect($scope.categories).toEqual(data);
      });

    });
  });

});





