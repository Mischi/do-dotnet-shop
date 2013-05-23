var shopBackend = angular.module('donetshop.backend', ['donetshop.resources']);

shopBackend.controller('EditProductCtrl', ['$scope', 'Product',
    
    function EditProductCtrl($scope, Product) {
        'use strict';

        $scope.categories = ['Software', 'Hardware', 'Food', 'Drinks'];
        $scope.products = Product.query();
        $scope.product = new Product();

        $scope.saveProduct = function (product) {
            $scope.products.push(product);
            product.$save();
            $scope.product = new Product();
        };
    }

]);