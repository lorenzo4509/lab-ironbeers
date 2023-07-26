const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

async function getBeers() {
  try {
    const beers = await punkAPI.getBeers();
    return beers;
  } catch (error) {
    throw new Error('Error al obtener las cervezas');
  }
}

async function getRandomBeer() {
  try {
    const beer = await punkAPI.getRandom();
    return beer[0];
  } catch (error) {
    throw new Error('Error al obtener la cerveza aleatoria');
  }
}

module.exports = {
  getBeers,
  getRandomBeer,
};
