
'use strict';

describe('categoryService', function () {
  var categoryService, $httpBackend, categories;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      categoryService = $injector.get('CategoryService');
      $httpBackend = $injector.get('$httpBackend');
    });

    categories = [
      {id: 0, name: '服装鞋包'},
      {id: 1, name: '手机数码'}
    ];
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
  });

//  this.getCategories = function (callback) {
//    $http.get('/api/categories').
//      success(function (data) {
//        callback(data);
//      });
//  };

  it('should get cartItems use get', function () {
    $httpBackend.expectGET('/api/categories').respond(200, categories);
    categoryService.getCategories(function (data) {
      expect(data.length).toBe(2);
    });
    $httpBackend.flush();
  });

  xit('should add to cart when has exist item use post',function(){
    var item = {barcode: 'ITEM00000', 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'};
    $httpBackend.expectGET('/api/cartItems').respond(200,cartItems);
    cartItems[0].count = 2;
    $httpBackend.expectPOST('/api/cartItems').respond(200, cartItems);
    cartService.addToCart(item,function(data){
      expect(cartItems[0].count).toBe(2);
      expect(cartItems.length).toBe(2);
    });
    $httpBackend.flush();
  });

  xit('should add to cart when does not have exist item use post',function(){
    var item = {barcode: 'ITEM00000', 'category': '服装鞋包', name: '测试1', 'price': 11, 'unit': '件'};
    $httpBackend.expectGET('/api/cartItems').respond(200,cartItems);
    $httpBackend.expectPOST('/api/cartItems').respond(200, cartItems);
    cartService.addToCart(item,function(data){
      expect(cartItems[0].count).toBe(1);
      expect(cartItems.length).toBe(2);
    });
    $httpBackend.flush();
  });

  xit('should change cartItem count use put',function (){
    var cartItem = {item: {id:1, 'category': '服装鞋包', name: '服装１', 'price': 11, 'unit': '件'}, count: 1};
    $httpBackend.expectPUT('/api/cartItems/1').respond(200, cartItems);
    cartService.changeCartItemCount(cartItem,function(data){
      expect(data.count).toBe(1);
    });
  });

  xit('should have getTotalCount function',function(){
    var result=cartService.getTotalCount(cartItems);
    expect(result).toBe(3);
  });

  xit('should have getTotalCount function',function(){
    var result=cartService.getTotalMoney(cartItems);
    expect(result).toBe(2233);
  });

  xit('should remove cartItems use post',function(){
    $httpBackend.expectPOST('/api/payment').respond(200, cartItems);
    cartService.remove();
    console.log(cartItems);
//    expect(cartItems.length).toBe(2);
  });

});
