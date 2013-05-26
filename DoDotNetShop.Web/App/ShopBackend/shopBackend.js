var shopBackend = angular.module('donetshop.backend', ['donetshop.resources', '$strap.directives']);


shopBackend.config(['$routeProvider',

    function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                controller: 'ProductListCtrl',
                templateUrl: 'Templates/ShopBackend/ProductList.html'
            })
            .when('/products/:id', {
                controller: 'ProductEditCtrl',
                templateUrl: 'Templates/ShopBackend/ProductEdit.html'
            })
            .otherwise({ redirectTo: '/' });
    }

]);