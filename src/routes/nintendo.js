'use strict';

const express = require('express');
const { nintendoModel } = require('../modules');
const { nintendoInterface } = require('../modules/collection-class');
const validator = require('../middleware/validator');
const router = express.Router();



// Get all
router.get('/nintendo', async (req, res, next) => {

  const nintendo = await nintendoInterface.read();
  res.status(200).json(nintendo);
});

// Get one
router.get('/nintendo/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneNintendo = await nintendoInterface.read(id);
  res.status(200).json(oneNintendo);
});


// Post one
router.post('/nintendo', validator, async (req, res, send) => {
  console.log('req.body: ', req.body);
  const newNintendo = await nintendoInterface.create();
  res.status(200).send(newNintendo);
});

// update one: add in .update after you've created the functionality in the collection-class;
router.put('/nintendo/:id', async (req, res, next) => {
  const updateNin = await nintendoModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${updateNin} is updated.`);
});


// Delete One add in .delete after you've created the functionality in the collection-class;
router.delete('/nintendo/:id', async (req, res, next) => {
  const deletedNin = await nintendoModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${deletedNin} is deleted `);
});

module.exports = router;