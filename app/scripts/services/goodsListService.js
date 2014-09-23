'use strict';

angular.module('letusgoApp')
  .service('GoodsItemService', function (localStorageService,$http) {

    this.getCartItems = function (callback){
      $http.get('/api/cartItems').

        success(function (data) {
          var cartItems = data || [];
          callback(cartItems);
        });
    };

    this.addToCart = function (item) {
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
        $http.post('/api/cartItems', {cartItems: cartItems});

      });
    };

    this.updateCart = function (newCartItem,callback) {
      this.getCartItems(function(data){
        var cartItems = data;
        _(cartItems).forEach(function (cartItem) {

          if (cartItem.item.name === newCartItem.item.name) {

            cartItem.count = newCartItem.count;
          }
        });
        callback(cartItems);
      });

    };

      this.getTotalCount = function (cartLists) {
        return _.reduce(_.pluck(cartLists, 'count'), function (count1, count2) {
          return count1 + count2;
        }) || 0;
      };

      this.get = function (key) {
        return localStorageService.get(key);
      };

      this.set = function (key, value) {
        return localStorageService.set(key, value);
      };

    });
