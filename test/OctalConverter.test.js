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
})

