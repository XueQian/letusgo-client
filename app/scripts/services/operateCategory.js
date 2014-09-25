'use strict';

angular.module('letusgoApp')
  .service('Operatecategorieservice', function ($http) {

    this.getCategories = function (callback) {
      $http.get('/api/categories').
        success(function (data) {
          callback(data);
        });
    };

    this.addCategory = function (category, callback) {

      this.getCategories(function (data) {

        var categoryList = data || [0];
        var hasExistCategory = _.any(categoryList, function (categoryList) {

          return category.name === categoryList.name;
        });
        if (!hasExistCategory) {

          var id = _.pluck(categoryList, 'id');
          category.id = _.max(id) + 1;

          categoryList.push(category);
        }

        $http.post('/api/categories', {categoryList: categoryList})
          .success(function (data) {
            callback(data);
          });

      });
    };

    this.deleteCategory = function (id) {
      $http.delete('/api/categories/' + id);
    };

    this.getcategoryById = function (id, callback) {
      this.getCategories(function (data) {

        var categories = data || [0];

        var result = _.find(categories, {id: parseInt(id)});
        callback(result);
      });

    };

    this.modifyCategory = function (id, category, callback) {

      $http.put('/api/categories/' + id, {category: category})
        .success(function (data) {
          callback(data);
        });

    };
  });










