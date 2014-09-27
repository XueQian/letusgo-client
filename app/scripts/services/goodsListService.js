'use strict';

angular.module('letusgoApp')
  .service('itemService', function (localStorageService, $http) {

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

  });
