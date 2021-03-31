const assert = require('assert');
const OCfunc = require('../OctalConverter');

describe('givenSingleDigitinDecimalReturninOctal', function () {
    it('convert(1) = 1', function () {
        // Given 
        var a = 1;
        var expectedResult = 1;

        // When
        var actualResult = OCfunc.convert(a);

        //Then
        assert.strictEqual(expectedResult, actualResult);
    });

    it('convert(2) = 2', function () {
        // Given 
        var a = 2;
        var expectedResult = 2;

        // When
        var actualResult = OCfunc.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    });
})

describe('givenMoreThanOneDigitInDecimalReturnOctal', function () {
    it('convert(8) = 10', function () {
        // Given 
        var a = 8;
        var expectedResult = 10;

        // When
        var actualResult = OCfunc.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);

    });

    it('convert(95) = 137', function () {
        // Given 
        var a = 95;
        var expectedResult = 137;

        // When
        var actualResult = OCfunc.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);

    });

    it('convert(2048) = 4000', function () {
        // Given 
        var a = 2048;
        var expectedResult = 4000;

        // When
        var actualResult = OCfunc.convert(a);

        // Then
        assert.strictEqual(expectedResult, actualResult);

    });
})

