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
        
        var $controller, locationSpy, product, productName = 'test';

        beforeEach(inject(function ($rootScope, _$controller_) {
            scope = $rootScope.$new();
            $controller = _$controller_;
            product = new Product({ name: productName });
            locationSpy = jasmine.createSpyObj('locationSpy', ['path']);
            
        }));



        it('should attach a list of categories to $scope.categories', function () {
            //Arrange
            $controller('ProductEditCtrl', { $scope: scope, $location: locationSpy });

            //Assert
            expect(scope.categories.length).toBeGreaterThan(0);
        });

        it('should initialise $scope.product with a new Product when no id in routes', function () {
            //Arrange
            $controller('ProductEditCtrl', { $scope: scope, $location: locationSpy });
            
            //Assert
            expect(scope.product instanceof Product).toBe(true);
            expect(scope.product.id).not.toBeDefined();
        });

        it('should initialise $scope.product with a new Product when no id in routes', function () {
            //Arrange
            $controller('ProductEditCtrl', { $scope: scope, $location: locationSpy });

            //Assert
            expect(scope.product instanceof Product).toBe(true);
            expect(scope.product.id).not.toBeDefined();
        });

        it('should fetch a product when $routeParams.id exists', function () {
            //Arrange
            $controller('ProductEditCtrl', { $scope: scope, $location: locationSpy, $routeParams: { id: '1234' } });
            httpBackend.expectGET('/api/products/1234').respond(200, { id: '1234' });
            
            //Act
            httpBackend.flush();

            //Assert
            expect(scope.product instanceof Product).toBe(true);
            expect(scope.product.id).toBe('1234');
        });

        describe('saveProduct', function () {

            it('should add product to the products list when saveProduct has been called', function () {
                //Arrange
                $controller('ProductEditCtrl', { $scope: scope, $location: locationSpy });
                httpBackend.expectPOST('/api/products').respond(201, { id: '123'});

                //Act
                scope.saveProduct(product);
                httpBackend.flush();

                //Assert
                //TODO: check that the name is post eq product.name
            });

            it('should update a product when it has been edited', function () {
                //Arrange
                $controller('ProductEditCtrl', { $scope: scope, $location: locationSpy, $routeParams: { id: '1234' } });
                httpBackend.expectGET('/api/products/1234').respond(200, { id: '1234' });
                httpBackend.flush(); //flush get request
                httpBackend.expectPUT('/api/products/1234').respond(200, { id: '1234' });

                //Act
                scope.saveProduct(scope.product);
                httpBackend.flush();
            });

            it('should change path to / when saveProduct has been called', function () {
                //Arrange
                $controller('ProductEditCtrl', { $scope: scope, $location: locationSpy });
                httpBackend.expectPOST('/api/products').respond(201, {});

                //Act
                scope.saveProduct(product);
                httpBackend.flush();

                //Assert
                expect(locationSpy.path).toHaveBeenCalledWith('/');
            });
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
            //Assert
            expect(scope.products.length).toBe(0);
        });

        it('should delete a product when deleteProduct has been called', function () {
            //Arrange
            var deleteMe = new Product({ id: 'DeleteMe', name: 'Tee' }),
                holdMe = new Product({ id: 'HoldMe', name: 'Bier' });

            scope.products.push(deleteMe, holdMe);

            httpBackend.expectDELETE('/api/products/DeleteMe').respond(200, angular.copy(deleteMe));

            //Act
            scope.deleteProduct(deleteMe);
            httpBackend.flush();

            //Assert
            expect(scope.products.length).toBe(1);
            expect(scope.products[0]).toEqualData(holdMe);
        });
    });

});