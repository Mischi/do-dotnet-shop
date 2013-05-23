/*global jasmine: false */
/*global describe: false */
/*global beforeEach: false */
/*global it: false */
/*global expect: false */
/*global module: false */
/*global inject: false */

describe('EditProductCtrl', function () {
    'use strict';

    var scope;

    beforeEach(module('donetshop.backend'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('EditProductCtrl', { $scope: scope });
    }));



    it('should attach a list of categories to $scope.categories', function () {
        expect(scope.categories.length).toBeGreaterThan(0);
    });

    it('should attach a empty list to $scope.products', function () {
        expect(scope.products.length).toBe(0);
    });

    it('should add product to the products list when saveProduct has been called', function () {
        //Arrange
        var product = {
            name: 'testProduct'
        };

        //Act
        scope.saveProduct(product);

        //Assert
        expect(scope.products.length).toBe(1);
        expect(scope.products[0]).toEqual(product);
    });

    it('should reset $scope.product when saveProduct has been called', function () {
        //Act
        scope.saveProduct({});

        //Assert
        expect(scope.product).toBeNull();
    });

});