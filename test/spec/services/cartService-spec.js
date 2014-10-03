
'use strict';

describe('cartService', function () {
  var cartService, $httpBackend, cartItems;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      cartService = $injector.get('CartService');
      $httpBackend = $injector.get('$httpBackend');
    });

    cartItems = [
      {item: {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1},
      {item: {barcode: 'ITEM00002', 'category': '全球美食', name: '美食１', 'price': 1111, 'unit': '件'}, count: 2}
    ];
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should get cartItems', function () {
    $httpBackend.expectGET('/api/cartItems').respond(200, cartItems);
    cartService.getCartItems(function (data) {
      expect(data.length).toBe(2);
    });
    $httpBackend.flush();
  });


});
