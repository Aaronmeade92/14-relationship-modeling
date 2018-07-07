'use strict';

require('babel-register');
import supertest from 'supertest';
// import superagent from 'superagent';
import Predators from '../models/predator.js';
import Prey from '../models/prey.js';


import {
  server,
} from '../app.js';

const app = require('../app.js');

import modelsHelper from '../models.helper.js';

const mockRequest = supertest(server);

const API_URL = '/api/v1/animals';

afterAll(modelsHelper.afterAll);
beforeAll(modelsHelper.beforeAll);
afterEach(modelsHelper.afterEach);


describe('Schema Module', () => {

  const PORT = 8888;
  beforeAll( () => {
    app.start(PORT);
  });
  afterAll( () => {
    app.stop();
  });

  it('mockRequest should exist', () => {
    expect(mockRequest).toBeDefined();
  });

  it('should return an empty array for animals', () => {

    return mockRequest.get(API_URL).then(results => {
      expect(JSON.parse(results.text)).toEqual([]);
    }).catch(err => {
      (err);
    });
  });

  it('should post an animal', () => {
    Predators.create({
      name: 'Gator',
    }).then(results => {
      expect(JSON.parse(results.text).name).toEqual('Gator');
    }).catch(err => {
      (err);
    });
  });

  it('should create a prey that belongs to a predator', () => {

    Predators.create({
      name: 'Shark',
    })
      .then(() => {
        Prey.create({
          name: 'Seal',
          predator: Predators._id,
        })
          .then(finalResults => {
            console.log(Prey.name);
            expect(finalResults.predator.name).toBeDefined();
          });
      });
  });

});