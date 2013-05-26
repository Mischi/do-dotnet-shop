/*global angular: false */

var shopBackendE2e = angular.module('donetshop.backend.e2e', ['donetshop.backend', 'ngMockE2E']);

shopBackendE2e.run(function ($httpBackend) {
    'use strict';

    var idCounter = 1,
        products = [
            { id: '1', name: 'Beer', description: 'iced', price: 1.49, category: 'Drinks' },
            { id: '2', name: 'Pizza', description: 'tuna', price: 4.49, category: 'Food' }
        ];

    $httpBackend.whenGET('/api/products').respond(products);

    $httpBackend.whenGET(/\/api\/products\/\d+/).respond(function (method, url) {
        var id = url.substring(url.lastIndexOf('/') + 1);

        var product;
        angular.forEach(products, function (p) {
            if (p.id == id) {
                product = p;
            }
        });

        //[status, responseBody, headers]
        return [200, product, ''];
    });

    $httpBackend.whenPOST('/api/products').respond(function (method, url, data) {
        idCounter++;
        data.id = idCounter.toString();
        products.push(angular.fromJson(data));

        //[status, responseBody, headers]
        return [201, data, ''];
    });

    $httpBackend.whenDELETE(/\/api\/products\/\d+/).respond(function (method, url, data) {
        data = angular.fromJson(data);
        products = products.filter(function (p) {
            if (p.id != data.id) {
                return p;
            }
        });

        //[status, responseBody, headers]
        return [200];
    });

    $httpBackend.whenGET(/Templates\//).passThrough();
});