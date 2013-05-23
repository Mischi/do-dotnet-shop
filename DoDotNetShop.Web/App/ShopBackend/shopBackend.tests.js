describe('ShopBackend', function () {
	'use strict';

	beforeEach(module('donetshop.backend'));

	describe('Routes', function () {

		var $httpBackend;

		beforeEach(inject(function (_$httpBackend_) {
			$httpBackend = _$httpBackend_;
		}));

		afterEach(function () {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});



		it('should have / defined', function () {
			expectCurrentRouteToBe('/', 'Templates/ShopBackend/ProductList.html', 'ProductListCtrl');
		});

		it('should have /products/new defined', function () {
			expectCurrentRouteToBe('/products', 'Templates/ShopBackend/ProductEdit.html', 'ProductEditCtrl');
		});

		it('should fallback to / if unknown route was called', function () {
			expectCurrentRouteToBe('/unknown/route', 'Templates/ShopBackend/ProductList.html', 'ProductListCtrl');
		});


		function expectCurrentRouteToBe(navigateTo, templateUrl, controller) {
			inject(function ($route, $location, $rootScope) {
				//Arrange
				$httpBackend.expectGET(templateUrl).respond(200, '');
				expect($route.current).toBeUndefined();

				//Act
				$location.path(navigateTo);
				$rootScope.$digest();
				$httpBackend.flush();

				//Assert
				expect($route.current.templateUrl).toBe(templateUrl);
				expect($route.current.controller).toBe(controller);
			});
		}
	});
});