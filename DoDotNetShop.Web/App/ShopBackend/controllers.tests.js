/*global angular: false */
/*global jasmine: false */
/*global describe: false */
/*global beforeEach: false */
/*global afterEach: false */
/*global xit: false */
/*global it: false */
/*global expect: false */
/*global module: false */
/*global inject: false */

describe('Controller', function () {
    'use strict';

    var scope, httpBackend, Product;

    beforeEach(module('donetshop.backend'));

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(inject(function ($httpBackend, _Product_) {
        httpBackend = $httpBackend;
        Product = _Product_;
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });



    describe('ProductEditCtrl', function () {
        
        var locationSpy, product, productName = 'test';

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();    
            product = new Product({ name: productName });
            locationSpy = jasmine.createSpyObj('locationSpy', ['path']);
            $controller('ProductEditCtrl', { $scope: scope, $location: locationSpy });
        }));



        it('should attach a list of categories to $scope.categories', function () {
            expect(scope.categories.length).toBeGreaterThan(0);
        });

        it('should add product to the products list when saveProduct has been called', function () {
            //Arrange
            httpBackend.expectPOST('/api/products').respond(201, {});

            //Act
            scope.saveProduct(product);
            httpBackend.flush();

            //Assert
            //TODO: check that the name is post eq product.name
        });

        it('should change path to / when saveProduct has been called', function () {
            //Arrange
            httpBackend.expectPOST('/api/products').respond(201, {});

            //Act
            scope.saveProduct(product);
            httpBackend.flush();

            //Assert
            expect(locationSpy.path).toHaveBeenCalledWith('/');
        });

        xit('should reset $scope.product when saveProduct has been called', function () {
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



    describe('ProductListCtrl', function () {

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller('ProductListCtrl', { $scope: scope });
        }));

        beforeEach(function () {
            httpBackend.expectGET('/api/products').respond(200, []);
            httpBackend.flush();
        });

        it('should attach a empty list to $scope.products', function () {
            expect(scope.products.length).toBe(0);
        });
    });

});