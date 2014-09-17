'use strict';

describe("shoppingListCtrl", function () {

  var $scope, GoodsItemService, createController, CartItemService, localStorageService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      GoodsItemService = $injector.get('GoodsItemService');
      CartItemService = $injector.get('CartItemService');
      localStorageService = $injector.get('localStorageService');
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

    it('should call get in GoodsItemService', function () {
      spyOn(GoodsItemService, 'get');
      createController();
      expect(GoodsItemService.get).toHaveBeenCalled();
    });

    it('should call getTotalMoney in getTotalMoney', function () {
      spyOn(CartItemService, 'getTotalMoney');
      createController();
      expect(CartItemService.getTotalMoney).toHaveBeenCalled();
    });

  });

  describe('when remove', function () {

    it('should call remove in CartItemService', function () {
      spyOn(CartItemService, 'remove');
      createController();
      $scope.remove();
      expect(CartItemService.remove).toHaveBeenCalled();
    });

    it('should call set in GoodsItemService', function () {
      spyOn(GoodsItemService, 'set');
      createController();
      $scope.remove();
      expect(GoodsItemService.set).toHaveBeenCalled();
    });

    it('it should emit to parent_totalCount===0', function () {
      spyOn($scope, '$emit');
      createController();
      $scope.remove();
      expect($scope.$emit).toHaveBeenCalledWith('parent_totalCount===0');
    });

  });

});



