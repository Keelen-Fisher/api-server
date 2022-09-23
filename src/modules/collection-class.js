'use strict';

class ModelInterface {
  constructor(model) {
    this.model = model;
  }
  // create:
  async create(json) {
    console.log('this is our json', json);
    try {
      let record = await this.model.create(json);
      return record;
    }
    catch (err) {
      console.error('Oh no, we have an error', err);
      return err;
    }
  }

  // read:
  async read(id = null) {
    try {
      let record;
      if (id) {
        record = await this.model.findOne({ where: { id } });
      }
      else {
        record = await this.model.findAll();
      }
      return record;
    }
    catch (err) {
      console.error('oh no, there is an error', err);
      return err;
    }
  }

  // Update
  // async update(id = null)


  // Delete
  // async delete()


}

module.exports = ModelInterface;