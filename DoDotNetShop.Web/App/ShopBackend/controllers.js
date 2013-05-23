var shopBackend = angular.module('donetshop.backend');

shopBackend.controller('ProductEditCtrl', ['$scope', '$location', 'Product', 
    
    function ProductEditCtrl($scope, $location, Product) {
        'use strict';

        $scope.categories = ['Software', 'Hardware', 'Food', 'Drinks'];
        $scope.product = new Product();

        $scope.saveProduct = function (product) {
            product.$save();

            //navigate to productList
            $location.path('/');
        };
    }

]);



shopBackend.controller('ProductListCtrl', ['$scope', 'Product',

    function ProductListCtrl($scope, Product) {
        'use strict';

        $scope.products = Product.query();
    }

]);