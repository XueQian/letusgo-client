'use strict';

angular.module('letusgoApp')
  .service('CartService', function (localStorageService, $http) {

    this.getCartItems = function (callback) {
      $http.get('/api/cartItems').

        success(function (data) {
          var cartItems = data || [];
          callback(cartItems);
        });
    };

    this.addToCart = function (item,callback) {
      this.getCartItems(function (data) {

        var cartItems = data;

        var hasExistItem = _.any(cartItems, function (cartItem) {
          return item.name === cartItem.item.name;
        });
        if (hasExistItem) {

          var existCartItem = _.find(cartItems, function (cartItem) {
            return item.name === cartItem.item.name;
          });
          existCartItem.count++;

        } else {
          cartItems.push({item: item, count: 1});
        }
        $http.post('/api/cartItems', {cartItems: cartItems})
          .success(function(){
            callback();
          });
      });
    };

    this.changeCartItemCount = function (cartItem, callback) {
      var id = cartItem.item.id;
      $http.put('/api/cartItems/' + id, {cartItem: cartItem})
        .success(function (data) {
          callback(data);
        });
    };

    this.getTotalCount = function (cartLists, callback) {
      var result = _.reduce(_.pluck(cartLists, 'count'), function (count1, count2) {
        return count1 + count2;
      });
      callback(result);
    };

    this.set = function (key, value) {
      return localStorageService.set(key, value);
    };

    this.get = function (key) {
      return localStorageService.get(key);
    };

    this.getTotalMoney = function (cartItems) {

      var totalMoney = 0;

      _(cartItems).forEach(function (cartItem) {

        totalMoney += cartItem.item.price * cartItem.count;
      });

      return totalMoney;
    };

    this.remove = function () {

      $http.post('/api/payment');
    };

    this.getTotalCount1= function(){
      if(localStorageService.get('totalCount')===null){
        localStorageService.set('totalCount',0);
      }
      return localStorageService.get('totalCount');
    };

  });
