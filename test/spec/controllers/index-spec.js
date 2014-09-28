'use strict';

xdescribe("indexCtrl", function () {

  var createController, $scope, cartService;

  beforeEach(function () {

    module('letusgoApp');

    inject(function ($injector) {

      $rootScope = $injector.get('$rootScope');
      $scope = $injector.get('$rootScope').$new();
      cartService = $injector.get('cartService');
      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller('indexCtrl', {
          $scope: $scope,
          cartService: cartService
        });
      };
    });
  });

  xit('parent_totalCount should return correct value', function () {
    spyOn(cartService, 'getTotalCount').and.returnValue(2);
    createController();
    $scope.$digest();
    $rootScope.$broadcast('parent_totalCount');
    $scope.$digest();
    expect($scope.totalCount).toBe(2);
  });

  xit('parent_totalCount should should call getTotalCount in cartService', function () {
    spyOn(cartService, 'getTotalCount');
    createController();
    $scope.$digest();
    $rootScope.$broadcast('parent_totalCount');
    $scope.$digest();
    expect(cartService.getTotalCount).toHaveBeenCalled();
  });

  it('parent_totalCount is zero should return correct value', function () {
    createController();
    $scope.$digest();
    $rootScope.$broadcast('parent_totalCount is zero');
    $scope.$digest();
    expect($scope.totalCount).toBe(0);
  });

  xit('parent_indexActive should return correct value', function () {
    createController();
    $scope.$digest();
    $rootScope.$broadcast('parent_indexActive');
    $scope.$digest();
    expect($scope.indexActive).toBe(true);
  });

  xit('parent_goodsListActive should return correct value', function () {
    createController();
    $scope.$digest();
    $rootScope.$broadcast('parent_goodsListActive');
    $scope.$digest();
    expect($scope.goodsListActive).toBe(true);
  });

  xit('parent_cartActive should return correct value', function () {
    createController();
    $scope.$digest();
    $rootScope.$broadcast('parent_cartActive');
    $scope.$digest();
    expect($scope.cartActive).toBe(true);
  });

  xit('parent_manageActive should return correct value', function () {
    createController();
    $scope.$digest();
    $rootScope.$broadcast('parent_manageActive');
    $scope.$digest();
    expect($scope.manageActive).toBe(true);
  });

});
