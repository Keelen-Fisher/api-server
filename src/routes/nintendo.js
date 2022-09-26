'use strict';

const express = require('express');
const router = express.Router();
const { nintendoInterface } = require('../modules/collection-class');
const validator = require('../middleware/validator');


// Post one
router.post('/nintendo', validator, async (req, res, send) => {
  console.log('req.body: ', req.body);
  const newNintendo = await nintendoInterface.create(req.body);
  res.status(200).send(newNintendo);
});

// Get all
router.get('/nintendo', async (req, res, next) => {
  try{
    let nintendo = await nintendoInterface.read();
    res.status(200).send(nintendo);
  }
  catch(error){
    next(error);
  }
});


// Get one
router.get('/nintendo/:id', async (req, res, next) => {
  try{
    let { id } = req.params;
    let oneNintendo = await nintendoInterface.read(id);
    res.status(200).json(oneNintendo);
  }
  catch(error){
    next(error);
  }
});



// update one: add in .update after you've created the functionality in the collection-class;
router.put('/nintendo/:id', async (req, res, next) => {
  try{
    let { id } = req.params;
    let data = req.body;
    const updateNin = await nintendoInterface.update(data, id);
    res.status(200).send(`${updateNin} is updated.`);
  }
  catch(error){
    next(error);
  }
});


// Delete One add in .delete after you've created the functionality in the collection-class;
router.delete('/nintendo/:id', async (req, res, next) => {
  try{
    let { id } = req.params;
    await nintendoInterface.destroy(id);
    res.status(200).send('Nintendo Game Deleted.');
  }
  catch(error){
    next(error);
  }  
});

module.exports = router;