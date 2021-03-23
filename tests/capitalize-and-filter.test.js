const capitalizeAndFilter = require("../capitalize-and-filter");

describe('capitalize and filter', () => {
    it('takes an array of strings, capitalizes the first letters, and filters out any string that starts with the letter F.', () => {
        const array = ['this', 'that', 'those', 'forever'];
        const editedArray = capitalizeAndFilter(array);
        expect(editedArray).toEqual(['This', 'That', 'Those']);
        
    });
});