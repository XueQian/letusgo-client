'use strict';

angular.module('letusgoApp')
  .service('Operatecategorieservice', function ($http, localStorageService) {

    this.getCategories = function (callback) {
      $http.get('/api/categories').
        success(function (data) {
          callback(data);
        });
    };

    this.addCategory = function (category, callback) {

      this.getCategories(function(data){

        var categoryList = data||[0];
        var hasExistCategory = _.any(categoryList, function (categoryList) {

          return category.name === categoryList.name;
        });
        if (!hasExistCategory) {

          var id =  _.pluck(categoryList, 'id');
          category.id =  _.max(id)+1;

          categoryList.push(category);
        }

        $http.post('/api/categories', {categoryList: categoryList})
          .success(function(data){
            callback(data);
          });

      });
    };

    this.deleteCategory = function(id){
      $http.delete('/api/categories/'+id);
    };

    this.getcategoryById = function (id, categories) {
      if (categories === null) {

        categories = localStorageService.get('categoryList');
      }
      return _.find(categories, function (category) {

        return category.id == id;
      }) || {};
    };


    this.modifyCategory = function (category) {

      var categoryList = localStorageService.get('categoryList');

      _.forEach(categoryList, function (category1, index) {

        if (category1.id == category.id) {

          categoryList[index] = category;
        }
      });

      localStorageService.set('categoryList', categoryList);

      return category;
    };

  });










