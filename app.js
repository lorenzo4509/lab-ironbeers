const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const { getBeers, getRandomBeer } = require('./punk-api-helpers');



const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/beers', async (req, res) => {
  try {
    const beers = await getBeers();
    res.render('beers', { beers });
  } catch (error) {
    console.error('Error al obtener las cervezas:', error);
    res.status(500).send('Error interno del servidor');
  }
});


app.get('/random-beer', async (req, res) => {
  try {
    const randomBeer = await getRandomBeer();
    res.render('random-beer', { randomBeer });
  } catch (error) {
    console.error('Error al obtener la cerveza aleatoria:', error);
    res.status(500).send('Error interno del servidor');
  }
});




app.listen(3000, () => console.log('🏃‍ on port 3000'));
