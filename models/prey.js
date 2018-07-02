'use strict';

import mongoose from 'mongoose';

const preySchema = mongoose.Schema({

  name: String,
  numberOfLegs: Number,
  hasFur: Boolean,
  predator: {type: mongoose.Schema.Types.ObjectId, ref: 'Predators'},
});

export default mongoose.model('Prey', preySchema);