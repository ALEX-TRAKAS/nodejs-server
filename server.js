const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const API_KEY = process.env.API_KEY; 

app.use(cors());

app.get('/places', async (req, res) => {
  try {
    const { input } = req.query;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(regions)&components=country:gr&language=el&key=${API_KEY}`
    );
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.get('/place', async (req, res) => {
    try {
      const { input } = req.query;
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${input}&fields=name,formatted_address,geometry,address_components&key=${API_KEY}&language=el`);
      res.json(response.data);
      console.log(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

  module.exports = app;


