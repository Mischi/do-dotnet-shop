var shopBackend = angular.module('donetshop.backend', []);

shopBackend.controller('EditProductCtrl', ['$scope',
    
    function EditProductCtrl($scope) {
        'use strict';

        $scope.categories = ['Software', 'Hardware', 'Food', 'Drinks'];
        $scope.products = [];

        $scope.saveProduct = function (product) {
            $scope.products.push(product);
            $scope.product = null;
        };
    }

]);