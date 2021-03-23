const copyAndPush = require("../copy-and-push");

describe('copy and push', () => {
    it('returns a new array with all the items in the original array and a new item pushed to the end.', () => {
        const numbers = [1, 2, 3];
        const newNumbers = copyAndPush(numbers, 4);
        expect(newNumbers).toEqual([1, 2, 3, 4]);
        
    });
});
