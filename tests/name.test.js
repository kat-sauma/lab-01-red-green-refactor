const getName = require("../name");


describe('name of object', () => {
    it('takes in an object and returns the name property.', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };

        expect(getName(spot)).toEqual('spot');
        
        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        
        expect(getName(character)).toEqual('Aang');
    });
});
