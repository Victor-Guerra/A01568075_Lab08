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

