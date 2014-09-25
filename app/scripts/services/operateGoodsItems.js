'use strict';

angular.module('letusgoApp')
  .service('Operategoodsitemservice', function ($http) {

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

    this.getItemById = function (id,callback) {
      this.getGoodsItems(function (data) {

        var items = data || [0];

        var result = _.find(items,{id:parseInt(id)});
        callback(result);
      });
    };

    this.modifyItem = function (id,item,callback) {

      $http.put('/api/items/'+id, {item: item})
        .success(function (data) {
          callback(data);
        });
    };

  });

