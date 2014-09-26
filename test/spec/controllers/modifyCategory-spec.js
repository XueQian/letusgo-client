'use strict';

describe("modifyCategoryCtrl", function () {

  var createController, $scope, Operatecategorieservice, $routeParams;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      Operatecategorieservice = $injector.get('Operatecategorieservice');
      $routeParams = $injector.get('$routeParams');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('modifyCategoryCtrl', {
          $scope: $scope,
          Operatecategorieservice: Operatecategorieservice,
          $routeParams: $routeParams
        });
      };
    });
  });

  describe('when load', function () {

    it('it should emit to parent_goodsListActive', function () {
      spyOn($scope, '$emit');
      createController();
      expect($scope.$emit).toHaveBeenCalledWith('parent_manageGoodsActive');
    });

  });

  describe('when getcategoryById', function () {

    it('should return category by id ', function () {
      var id = 0;
      var category = {id: 0, name: '服装鞋包'};

      spyOn(Operatecategorieservice, 'getcategoryById').and.callFake(function (id, callback) {
        callback(category);
      });

      createController();

      Operatecategorieservice.getcategoryById(id, function (data) {
        expect($scope.category).toEqual(data);
      });

    });

  });

  describe('when modifyCategory', function () {

    it('should return categories after modify', function () {
      var index = 0;
      var category = {id: 0, name: '服装鞋包'};
      var categories = [
        {id: 0, name: '服装鞋包'}
      ];

      spyOn(Operatecategorieservice, 'modifyCategory').and.callFake(function (index, category, callback) {
        callback(categories);
      });

      createController();
      $scope.modifyCategory(index);

      Operatecategorieservice.modifyCategory(index, category, function (data) {
        expect($scope.categories).toEqual(data);
      });

    });

  });

});
