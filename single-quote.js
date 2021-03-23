const fetch = require('node-fetch');

const getQuotes = async () => {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const [quote] = await res.json();
    return {
      name: quote.character,
      text: quote.quote,
      image: quote.image,
    };
  };
  
  module.exports = getQuotes;