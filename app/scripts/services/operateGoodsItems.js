'use strict';

angular.module('letusgoApp')
  .service('Operategoodsitemservice', function (localStorageService, $http) {

    this.getGoodsItems = function(callback) {
      $http.get('/api/items').
        success(function (data) {
          callback(data);
        });
    };

    this.addItem = function (item) {

      this.getGoodsItems(function(data){

        var itemList = data;
        var hasExistItem = _.any(itemList, function (itemList) {

          return item.name === itemList.name;
        });
        if (!hasExistItem) {

          var barcode =  _.pluck(itemList, 'barcode');
          item.barcode =  _.max(barcode)+1;
          itemList.push(item);
        }

        $http.post('/api/items', {itemList: itemList});

      });
    };

    this.addGoodsItems = function (item, itemList) {

      item.category = item.category.id;

      var hasExistGoodsItems = _.any(itemList, function (newItemList) {

        return item.name === newItemList.name;

      });

      if (!hasExistGoodsItems) {

        var barcode = itemList[itemList.length - 1].barcode.substring(8);

        item.barcode = itemList[itemList.length - 1].barcode.substring(0, 8) + (++barcode);

        itemList.push(item);

      }
      localStorageService.set('itemList', itemList);
    };

    this.deleteItem = function(callback) {
      $http.delete('api/items').
      success(function (data) {
        callback(data);
      });
    };

    this.getItemById = function (id) {

      var result = _.find(this.getGoodsItems(), function (ItemList) {

        return ItemList.category == id;
      });

      return result ? false : true;
    };


    this.getGoodsItemsByBarcode = function (barcode) {
      var itemList = localStorageService.get('itemList');

      return _.find(itemList, {barcode: barcode}) || {};
    };

    this.modifyGoods = function (newItemList) {
      var itemList = localStorageService.get('itemList');

      _.forEach(itemList, function (item, index) {

        if (item.barcode === newItemList.barcode) {
          itemList[index] = newItemList;
        }
      });

      localStorageService.set('itemList', itemList);

      return itemList;
    };
  });

