const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/', async (req, res) => {
  try {

    const response = await fetch('https://catfact.ninja/fact');

    const facts = await response.json();
    console.log(facts)

    res.render('fact', { facts: facts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;