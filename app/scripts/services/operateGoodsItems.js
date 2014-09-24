'use strict';

angular.module('letusgoApp')
  .service('Operategoodsitemservice', function (localStorageService, $http) {

    this.getGoodsItems = function(callback) {
      $http.get('/api/items').
        success(function (data) {
          callback(data);
        });
    };

    this.addItem = function (item,callback) {

      this.getGoodsItems(function(data){

        var itemList = data||[0];
        var hasExistItem = _.any(itemList, function (itemList) {

          return item.name === itemList.name;
        });
        if (!hasExistItem) {

          var id =  _.pluck(itemList, 'id');
          item.id =  _.max(id)+1;
          itemList.push(item);
        }

        $http.post('/api/items', {itemList: itemList})
          .success(function(data){
            callback(data);
          });

      });
    };

    this.deleteGoodsItems = function(id){
      $http.delete('/api/items/'+id);
    };

    this.getItemById = function (id) {

      var result = _.find(this.getGoodsItems(), function (ItemList) {

        return ItemList.category == id;
      });

      return result ? false : true;
    };


    this.getGoodsItemsByid = function (id) {
      var itemList = localStorageService.get('itemList');

      return _.find(itemList, {id: id}) || {};
    };

//    this.modifyGoods = function (newItemList) {
//      var itemList = localStorageService.get('itemList');
//
//      _.forEach(itemList, function (item, index) {
//
//        if (item.id === newItemList.id) {
//          itemList[index] = newItemList;
//        }
//      });
//
//      localStorageService.set('itemList', itemList);
//
//      return itemList;
//    };
    this.modifyGoods = function(newItem,callback){
      var id = newItem.id;

      $http.put('/api/items/'+id , {'newItem': newItem})
      .
        success(function (data) {
          callback(data);
          console.log(data);
        });
    };




  });

