'use strict';

angular.module('letusgoApp')
  .service('CategoryService', function ($http) {

    this.getCategories = function (callback) {
      $http.get('/api/categories').
        success(function (data) {
          callback(data);
        });
    };

    this.addCategory = function (category, callback) {

      this.getCategories(function (data) {

        var categories = data;
        var hasExistCategory = _.any(categories, function (categories) {

          return category.name === categories.name;
        });
        if (!hasExistCategory) {

          var id = _.pluck(categories, 'id');
          category.id = _.max(id) + 1;

          categories.push(category);
        }

        $http.post('/api/categories', {categories: categories})
          .success(function (data) {
            callback(data);
          });

      });
    };

    this.deleteCategory = function (id) {
      $http.delete('/api/categories/' + id);
    };

    this.getcategory = function (id, callback) {

      $http.get('/api/categories/' + id)
        .success(function (data) {
          callback(data);
        });
    };

    this.modifyCategory = function (id, category, callback) {

      $http.put('/api/categories/' + id, {category: category})
        .success(function (data) {
          callback(data);
        });
    };
  });










