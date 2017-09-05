'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const bcrypt = require('bcrypt');

router.get('/student', (req, res, next) => {

});

router.post('/', function(req, res, next) {
  console.log('in post route')
  let email = req.body.email
  let password = req.body.password

  if (email) {
    knex('users')
    .where('email', email)
    .then((data) => {
      if (data.length > 0) {
        bcrypt.compare(password, data[0].hashed_password, (err, result) => {
          if (result) {
            let token = jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
              email: data[0].email,
              id: data[0].id,
              is_admin: data[0].is_admin
            }, 'secret')
            // secret in production should be process.env.JWT_KEY
            res.cookie('token', token, {
              httpOnly: true
            })
            // send status and change state
            res.status(200).send('hello')
          } else {
            res.status(401).send({ error: 'Bad email or password' })
          }
        })
      } else {
        res.status(401).send({ error: 'Bad email or password' })
      }
    })
  }
})

module.exports = router;
