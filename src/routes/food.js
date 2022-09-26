'use strict';

const express = require('express');
const validator = require('../middleware/validator');
const { foodInterface } = require('../modules/collection-class');
const router = express.Router();

// Post One
router.post('/food', validator, async (req, res, send) => {
  console.log('req body: ', req.body);
  const newFood = await foodInterface.create(req.body);
  res.status(200).send(newFood);
});


// Get all
router.get('/food', async (req, res, next) => {
  try {
    const foods = await foodInterface.read();
    res.status(200).json(foods);
  }
  catch (error) {
    next(error);
  }
});


// Get one
router.get('/food/:id', async (req, res, next) => {
  try {
    let { id } = req.params;
    let oneFood = await foodInterface.read(id);
    res.status(200).json(oneFood);
  }
  catch (error) {
    next(error);
  }
});


// update one: add in .update after you've created the functionality in the collection-class;
router.put('/food/:id', async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = req.body;
    let updatedFood = await foodInterface.update(data, id);
    res.status(200).send(updatedFood);
  }
  catch (error) {
    next(error);
  }
});

// Delete One add in .delete after you've created the functionality in the collection-class;
router.delete('/food/:id', async (req, res, next) => {
  try {
    let { id } = req.params.id;
    await foodInterface.destroy(id);
    res.status(200).send('Food Section is Deleted');
  }
  catch (error) {
    next(error);
  }
});

module.exports = router;