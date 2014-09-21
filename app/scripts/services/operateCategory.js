'use strict';

angular.module('letusgoApp')
  .service('Operatecategorieservice', function ($http, localStorageService) {

    this.getCategories = function (callback) {
      $http.get('/api/categories').
        success(function (data) {
          callback(data);
        });
    };

    this.getcategoryById = function (id, categories) {
      if (categories === null) {

        categories = localStorageService.get('categoryList');
      }
      return _.find(categories, function (category) {

        return category.id == id;
      }) || {};
    };

    this.addCategory = function (category, categoryList) {

      var hasExistCategory = _.any(categoryList, function (categoryList) {

        return category.name === categoryList.name;
      });

      if (!hasExistCategory) {

        var id = parseInt(categoryList[categoryList.length - 1].id);

        category.id = id + 1;

        categoryList.push(category);

      }

      localStorageService.set('categoryList', categoryList);
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










