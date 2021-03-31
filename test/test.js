const assert = require('assert');
const javascriptFunctions = require('../javascriptFunctions');

describe('givenTwoIntegersWhenSumThenSucceess', function () {
    it('sum(1,2) = 3', function () {
        // Given
        var a = 1;
        var b = 2;
        var expectedResult = 3;

        // Given
        var actualResult = javascriptFunctions.sum(a, b);

        // Then
        assert.strictEqual(expectedResult, actualResult);
    })
})
