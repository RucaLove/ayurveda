'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const bcrypt = require('bcrypt');

router.get('/academy', (req, res, next) => {

});

router.post('/api/users', (req, res, next) => {
  req.body
  knex('users')
  .where('email', req.body.email)
  .then((user) => {
    if(user.length === 0) {
      
    }
  })
})

module.exports = router;
