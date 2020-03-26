var assert = require('assert');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

// describe("pow", function() {
//     it("2 raised to power 3 is 8", function() {
//         assert.equal(pow(2, 3), 8);
//     });
//     it("3 raised to power 4 is 81", function() {
//         assert.equal(pow(3, 4), 81);
//     });
// });


// describe("up", function() {
//     function makeTest(x) {
//         let expected = x * x * x;
//         it(`${x} in the power 3 is ${expected}`, function() {
//             assert.equal(up(x, 3), expected);
//         });
//     }
  
//     for (let x = 1; x <= 5; x++) {
//         makeTest(x);
//     }
// });