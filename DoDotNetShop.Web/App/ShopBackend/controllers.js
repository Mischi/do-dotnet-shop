var shopBackend = angular.module('donetshop.backend');

shopBackend.controller('ProductEditCtrl', ['$scope', '$location', '$routeParams', 'Product', 
    
    function ProductEditCtrl($scope, $location, $routeParams, Product) {
        'use strict';

        $scope.categories = ['Software', 'Hardware', 'Food', 'Drinks'];
        $scope.product = $routeParams.id ? Product.get({ id: $routeParams.id }) : new Product();

        $scope.saveProduct = function (product) {
            if (product.id) {
                product.$update();
            } else {
                product.$save();
            }

            //navigate to productList
            $location.path('/');
        };
    }

]);



shopBackend.controller('ProductListCtrl', ['$scope', 'Product',

    function ProductListCtrl($scope, Product) {
        'use strict';

        $scope.products = Product.query();

        $scope.deleteProduct = function (product) {
            product.$delete();

            var index = $scope.products.indexOf(product);
            $scope.products.splice(index, 1);
        };
    }

]);