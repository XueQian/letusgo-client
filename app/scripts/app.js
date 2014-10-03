'use strict';

angular
  .module('letusgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'indexCtrl'
      })
      .when('/itemList', {
        templateUrl: 'views/itemList.html',
        controller: 'itemListCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'cartCtrl'
      })
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'inventoryCtrl'
      })
      .when('/manageCategory', {
        templateUrl: 'views/manageCategory.html',
        controller: 'manageCategoryCtrl'
      })
      .when('/manageGoodsItems', {
        templateUrl: 'views/manageItem.html',
        controller: 'manageGoodsItemsCtrl'
      })
      .when('/addCategory', {
        templateUrl: 'views/addCategory.html',
        controller: 'manageCategoryCtrl'
      })
      .when('/addGoodsItems', {
        templateUrl: 'views/addItem.html',
        controller: 'manageGoodsItemsCtrl'
      })
      .when('/modifyCategory/:id', {
        templateUrl: 'views/modifyCategory.html',
        controller: 'modifyCategoryCtrl'
      })
      .when('/modifyGoodsItems/:id', {
        templateUrl: 'views/modifyItem.html',
        controller: 'modifyGoodsItemsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
