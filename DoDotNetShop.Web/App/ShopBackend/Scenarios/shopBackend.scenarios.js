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
/*global browser: false */
/*global element: false */

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('ContactManager App', function () {
    'use strict';

    it('should redirect to / when invalid url was entered', function () {
        //Act
        browser().navigateTo('/#/random/url');

        //Assert
        expect(browser().location().url()).toBe('/');
    });



    describe('ProductList view', function () {

        beforeEach(function () {
            browser().navigateTo('/');
        });



        it('url should point to /', function () {
            //Assert
            expect(browser().location().url()).toBe('/');
        });

        it('should have loaded a list of saved products', function () {
            //Assert
            expect(repeater('table tr').count()).toEqual(3);
        });

        it('should display the category as UPPERCASE', function () {
            //Assert
            expect(element('table tr:nth-child(2) td:nth-child(4)').text()).toBe('DRINKS');
        });

        it('should filter the list when a searchTerm has been entered', function () {
            input('searchText.name').enter('er');

            //Assert
            expect(repeater('table tr').count()).toEqual(2);
            expect(element('table tr:last-child() td:nth-child(1)').text()).toBe('Beer');
        });

        it('should delete the Pizza product when Pizza Delete Link has been clicked', function () {
            //Act
            element('table tr:last-child() a:last-child()').click();

            //Assert
            expect(repeater('table tr').count()).toEqual(2);
            expect(element('table tr:last-child() td:nth-child(1)').text()).toBe('Beer');
        });

        it('should go to /product/1 when Beer Edit link has been clicked ', function () {
            //Act
            element('table tr:nth-child(2) a:nth-child(n-1)').click();

            //Assert
            expect(browser().location().url()).toBe('/products/1');
        });
    });



    describe('ProductEdit View with new Product', function () {

        var saveBtn;

        beforeEach(function () {
            //Arrange
            browser().navigateTo('/#/products/');
            saveBtn = element('button[type=submit]', 'Save Button');
        });

        it('should save a new Product', function () {
            //Act
            input('product.name').enter('Döner');
            input('product.description').enter('with hot sauce');
            input('product.price').enter(3.45);
            select('product.category').option('Food');
            element('button[type=submit]').click();

            //Assert
            expect(browser().location().url()).toBe('/');
            expect(repeater('table tr').count()).toEqual(4);

            input('searchText.name').enter('Döner');
            expect(element('table tr:last-child() td:nth-child(1)', 'Döner Product Row').text()).toBe('Döner');
        });

        it('should have the save button disabled while form not valid', function () {
            //Assert
            expect(saveBtn.attr('disabled')).toBeDefined();

            //Act
            input('product.name').enter('Döner');

            //Assert
            expect(saveBtn.attr('disabled')).not().toBeDefined();
        });

    });

    describe('ProductEdit View with existing Product', function () {

        var saveBtn;

        beforeEach(function () {
            //Arrange
            browser().navigateTo('/#/products/1');
            saveBtn = element('button[type=submit]', 'Save Button');
        });

        it('should bind the Product values to the form', function () {
            //Assert
            expect(input('product.name').val()).toBe('Beer');
            expect(input('product.description').val()).toBe('iced');
            expect(input('product.price').val()).toBe('1.49');
        });

        it('should have the save button disabled while form not valid', function () {
            //Act
            input('product.name').enter('');

            //Assert
            expect(saveBtn.attr('disabled')).toBeDefined();
        });

        it('should have the save button disabled while form not dirty', function () {
            //Assert
            expect(saveBtn.attr('disabled')).toBeDefined();
        });

        it('should have the save button enabled when form is dirty', function () {
            input('product.name').enter('Beer2');

            //Assert
            expect(saveBtn.attr('disabled')).not().toBeDefined();
        });

    });

});