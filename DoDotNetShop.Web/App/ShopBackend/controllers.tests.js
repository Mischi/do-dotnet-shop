/*global angular: false */
/*global jasmine: false */
/*global describe: false */
/*global beforeEach: false */
/*global afterEach: false */
/*global it: false */
/*global expect: false */
/*global module: false */
/*global inject: false */

describe('EditProductCtrl', function () {
    'use strict';

    var scope, Product, product, httpBackend, productName = 'test';


    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('donetshop.backend'));

    beforeEach(inject(function ($rootScope, $controller, _Product_, $httpBackend) {
        scope = $rootScope.$new();
        Product = _Product_;
        product = new Product({ name: productName });
        httpBackend = $httpBackend;
        $controller('EditProductCtrl', { $scope: scope });
    }));

    beforeEach(function () {
        httpBackend.expectGET('/api/products').respond(200, []);
        httpBackend.flush();
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should attach a list of categories to $scope.categories', function () {
        expect(scope.categories.length).toBeGreaterThan(0);
    });

    it('should attach a empty list to $scope.products', function () {
        expect(scope.products.length).toBe(0);
    });

    it('should add product to the products list when saveProduct has been called', function () {
        //Arrange
        var id = 'magic-guid';
        var response = { id: id, name: productName };

        httpBackend.expectPOST('/api/products').respond(201, response);

        //Act
        scope.saveProduct(product);
        httpBackend.flush();


        //Assert
        expect(scope.products[0] instanceof Product).toBe(true);
        expect(scope.products).toEqualData([response]);
    });

    it('should reset $scope.product when saveProduct has been called', function () {
        //Arrange
        httpBackend.expectPOST('/api/products').respond(201, {});

        //Act
        scope.saveProduct(product);
        httpBackend.flush();

        //Assert
        expect(scope.product instanceof Product).toBe(true);
        expect(scope.product).toEqualData({});
    });

});