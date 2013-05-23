var shopResources = angular.module('donetshop.resources', ['ngResource']);


shopResources.factory('Product', ['$resource',

        function ($resource) {
            'use strict';

            // { 'get':    {method:'GET'},
            //   'save':   {method:'POST'},
            //   'query':  {method:'GET', isArray:true},
            //   'remove': {method:'DELETE'},
            //   'delete': {method:'DELETE'} };
            var Product = $resource('/api/products/:id', { id: "@id" });

            return Product;
        }
]);