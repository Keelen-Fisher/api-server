'use strict';

const express = require('express');
const { foodModel } = require('../modules');
const validator = require('../middleware/validator');
const { foodInterface } = require('../modules/collection-class');
const router = express.Router();

// Get all
router.get('/food', async(req, res) => {
  const foods = await foodInterface.read();
  res.status(200).json(foods);
});


// Get one
router.get('/food/:id', async (req, res) => {
  let { id } = req.params;
  let oneFood = await foodInterface.read(id);
  res.status(200).json(oneFood);
});


// Post One
router.post('/food', validator, async(req, res, send) => {
  console.log('req body: ', req.body);
  const newFood = await foodInterface.create();
  res.status(200).send(newFood);
});


// update one: add in .update after you've created the functionality in the collection-class;
router.put('/food/:id', async (req, res) => {
  const updateFood = await foodModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${updateFood} is updated.`);
} );

// Delete One add in .delete after you've created the functionality in the collection-class;
router.delete('/food/:id', async (req, res) => {
  const deletedFood = await foodModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${deletedFood} is deleted `);
});

module.exports = router;