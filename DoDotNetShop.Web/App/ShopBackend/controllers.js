var shopBackend = angular.module('donetshop.backend');

shopBackend.controller('ProductEditCtrl', ['$scope', '$location', '$routeParams', '$log', 'Product',
    
    function ProductEditCtrl($scope, $location, $routeParams, $log, Product) {
        'use strict';

        $scope.categories = ['Software', 'Hardware', 'Food', 'Drinks'];
        $scope.product = $routeParams.id ? Product.get({ id: $routeParams.id }) : new Product();

        $scope.saveProduct = function (product) {

            function successHandler() {
                //navigate to productList
                $location.path('/');
            }
            
            function errorHandler(res) {
                $log.error(res);

                $scope.errors = res.data.modelState;
            }

            if (product.id) {
                product.$update().then(successHandler, errorHandler);
            } else {
                product.$save().then(successHandler, errorHandler);
            }       
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