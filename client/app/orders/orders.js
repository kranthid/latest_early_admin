'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/orders',
        templateUrl: 'app/orders/orders.html',
        controller: 'OrdersCtrl'
      });
  });
