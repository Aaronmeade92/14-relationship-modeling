'use strict';
import express from 'express';
import Predators from '../models/predator.js';
import Prey from '../models/prey.js';

const router = express.Router();

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

router.get('/api/v1/predator', (req, res) => {
  Predators
    .find()
    .then(data => sendJSON(res, data))
    .catch(err => res.send(err));
});

router.post('/api/v1/predator', (req, res) => {

  let predator = new Predators(req.body);
  predator.save()
    .then(data => sendJSON(res, data))
    .catch(err => res.send(err));
});

router.put('/api/v1/predator/:id', (req, res) => {

  // Animals.find({_id:req.params.id}).then(animal => animal.update({...}))
  Predators.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new: true},
).then(data => {
    sendJSON(res, data);
  }).catch(err => res.send(err));
  
});
router.post('api/v1/prey', (req ,res, next) => {

  Prey.create(req.body)
    .then(results => {res.send(results);})
    .catch(next);
});

router.get('api/v1/prey', (req, res, next) => {
  Prey.find()
    .then(results => {
      Prey.find()
        .populate('Predators')
        .exec()
        .then(finalResults => {
          res.send(finalResults);
        }).catch(next);
    }).catch(next);
});
export default router;