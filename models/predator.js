'use strict';

import mongoose from 'mongoose';

const predatorSchema = mongoose.Schema({

  name: String,
  numberOfLegs: Number,
  hasFur: Boolean,
  eatsHumans: Boolean,
});

export default mongoose.model('Predators', predatorSchema);