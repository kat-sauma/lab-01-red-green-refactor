const getQuotes = require('../single-quote');

describe('getQuotes function', () => {
    it('should return a single quote in the correct format', async() => {
      const quote = await getQuotes();

      const charInfo = {
        name: expect.any(String),
        text: expect.any(String),
        image: expect.any(String),
      };
      console.log(quote);
      expect(quote).toEqual(expect.objectContaining(charInfo));
    });
  });
  